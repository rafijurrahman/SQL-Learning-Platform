import alasql from 'alasql';

export interface ValidationResult {
  success: boolean;
  message?: string;
  hint?: string;
  actualResult?: any[];
  expectedResult?: any[];
}

export async function validateSql(
  setupSql: string,
  userSql: string,
  solutionSql: string
): Promise<ValidationResult> {
  try {
    // Create a new database for this validation run to ensure isolation
    const db = new alasql.Database();

    // 1. Run Setup SQL
    try {
      // Split setup SQL by semicolon to handle multiple statements if alasql doesn't do it automatically
      // alasql usually handles multiple statements, but let's be safe or just try directly.
      // Actually, alasql.exec supports multiple statements.
      db.exec(setupSql);
    } catch (e: any) {
      return { success: false, message: `Setup Error: ${e.message}` };
    }

    // 2. Run Solution SQL (Expected Result)
    let expectedResult: any[] = [];
    try {
      expectedResult = db.exec(solutionSql);
    } catch (e) {
      console.error("Solution SQL Error:", e);
      return { success: false, message: "Internal Error: Solution SQL failed." };
    }

    // 3. Run User SQL (Actual Result)
    // We need to run this on a FRESH database state identical to the one before solutionSql was run?
    // Or does solutionSql just SELECT?
    // Usually solutionSql is just a SELECT. If it modifies data, then userSql needs a fresh DB.
    // Let's assume for now that solutionSql and userSql are read-only SELECTs.
    // If they are not, we might need to re-run setupSql on a new DB for the user.
    // To be safe, let's create a second DB for the user query to ensure total isolation.
    
    const userDb = new alasql.Database();
    try {
        userDb.exec(setupSql);
    } catch (e: any) {
        return { success: false, message: `Setup Error (User DB): ${e.message}` };
    }

    let actualResult: any[] = [];
    try {
      actualResult = userDb.exec(userSql);
    } catch (e: any) {
      return { 
        success: false, 
        message: `SQL Error: ${e.message || e}`,
        hint: "Check your syntax. Did you misspell a keyword or column name?"
      };
    }

    // 4. Compare Results
    if (!actualResult) actualResult = [];
    if (!expectedResult) expectedResult = [];

    // Normalize results for comparison
    // alasql returns array of objects: [{col1: val1, col2: val2}, ...]
    // We want to compare values regardless of column order, but column names usually matter in SQL.
    // However, for simple exercises, sometimes aliases differ.
    // Let's normalize by converting each row to a sorted string of values.

    const normalize = (rows: any[]) => {
      if (!Array.isArray(rows)) return [];
      return rows.map(row => {
        // If row is primitive (e.g. single value), wrap it
        if (typeof row !== 'object' || row === null) return String(row);
        
        // Sort keys to ensure consistent order if column order in object differs (unlikely but possible)
        // Actually, we probably want to compare values in order of keys?
        // But keys are unordered in JS objects.
        // SQL result order matters.
        // Let's assume the query returns columns in a specific order.
        // But alasql returns objects with keys.
        // If the user aliases columns differently, keys will differ.
        // If we want to ignore column names, we should just look at values.
        // But `Object.values(row)` order is not guaranteed to match SQL column order in all JS engines,
        // though usually it matches insertion order.
        // Let's try to be lenient: sort the values of each row?
        // No, that would make (1, 2) equal (2, 1).
        // Let's stick to strict comparison first, or maybe just check if the set of rows matches?
        // If order matters (ORDER BY), we check order.
        
        // Simple approach: JSON stringify.
        // But keys might be different.
        
        // Let's try to match values.
        return Object.values(row).map(v => String(v)).join('|');
      });
    };

    // If solution uses ORDER BY, order matters.
    // If not, order might not matter.
    // For simplicity, let's enforce order if the solution implies it, or just always enforce order?
    // Let's just compare the normalized arrays strictly.
    
    const normExpected = normalize(expectedResult);
    const normActual = normalize(actualResult);

    const isMatch = JSON.stringify(normExpected) === JSON.stringify(normActual);

    if (isMatch) {
      return { success: true, actualResult, expectedResult };
    } else {
      // Generate Hint
      let hint = "The result does not match the expected output.";
      
      const solUpper = solutionSql.toUpperCase();
      const userUpper = userSql.toUpperCase();

      // Step 1: Logical Checks (Heuristics)
      if (solUpper.includes("WHERE") && !userUpper.includes("WHERE")) {
          hint = "You might be missing a filtering condition.";
      } else if (solUpper.includes("GROUP BY") && !userUpper.includes("GROUP BY")) {
          hint = "This query requires aggregation (grouping).";
      } else if (solUpper.includes("JOIN") && !userUpper.includes("JOIN")) {
          hint = "You might need to join tables to get the required data.";
      } else if (solUpper.includes("ORDER BY") && !userUpper.includes("ORDER BY")) {
          hint = "The result needs to be sorted.";
      } else if (actualResult.length > expectedResult.length) {
          hint = "Your result has too many rows. Check your filters.";
      } else if (actualResult.length < expectedResult.length) {
          hint = "Your result is missing rows. Check if your filters are too strict.";
      } else {
          hint = "The number of rows is correct, but values differ. Check your column selection or calculations.";
      }
      
      return { 
        success: false, 
        message: "Incorrect Result", 
        hint,
        actualResult,
        expectedResult 
      };
    }

  } catch (e: any) {
    return { success: false, message: `System Error: ${e.message}` };
  }
}
