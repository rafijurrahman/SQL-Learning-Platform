export function normalizeSql(sql: string): string {
  if (!sql) return sql;

  let normalized = sql;

  // List of patterns to normalize
  const patterns: [RegExp, string][] = [
    [/S\s+ELECT/gi, 'SELECT'],
    [/F\s+ROM/gi, 'FROM'],
    [/W\s+HERE/gi, 'WHERE'],
    [/A\s+ND/gi, 'AND'],
    [/O\s+R/gi, 'OR'],
    [/I\s+N/gi, 'IN'],
    [/B\s+ETWEEN/gi, 'BETWEEN'],
    [/L\s+IKE/gi, 'LIKE'],
    [/I\s+S\s+NULL/gi, 'IS NULL'],
    [/I\s+S\s+NOT\s+NULL/gi, 'IS NOT NULL'],
    [/G\s+ROUP\s+BY/gi, 'GROUP BY'],
    [/H\s+AVING/gi, 'HAVING'],
    [/O\s+RDER\s+BY/gi, 'ORDER BY'],
    [/L\s+IMIT/gi, 'LIMIT'],
    [/T\s+OP/gi, 'TOP'],
    [/I\s+NNER\s+JOIN/gi, 'INNER JOIN'],
    [/L\s+EFT\s+JOIN/gi, 'LEFT JOIN'],
    [/R\s+IGHT\s+JOIN/gi, 'RIGHT JOIN'],
    [/F\s+ULL\s+JOIN/gi, 'FULL JOIN'],
    [/U\s+NION\s+ALL/gi, 'UNION ALL'], // Check this before UNION
    [/U\s+NION/gi, 'UNION'],
    [/E\s+XISTS/gi, 'EXISTS'],
    [/N\s+OT\s+EXISTS/gi, 'NOT EXISTS'],
    [/C\s+ASE/gi, 'CASE'],
    [/W\s+HEN/gi, 'WHEN'],
    [/T\s+HEN/gi, 'THEN'],
    [/E\s+LSE/gi, 'ELSE'],
    [/E\s+ND/gi, 'END'],
    [/W\s+ITH/gi, 'WITH'],
    [/O\s+VER/gi, 'OVER'],
    [/P\s+ARTITION\s+BY/gi, 'PARTITION BY'],
    // Add CREATE TABLE and INSERT INTO just in case, though not explicitly requested, they are common in dbFiddle
    [/C\s+REATE\s+TABLE/gi, 'CREATE TABLE'],
    [/I\s+NSERT\s+INTO/gi, 'INSERT INTO'],
    [/V\s+ALUES/gi, 'VALUES'],
    [/P\s+RIMARY\s+KEY/gi, 'PRIMARY KEY'],
    [/V\s+ARCHAR/gi, 'VARCHAR'],
    [/D\s+ECIMAL/gi, 'DECIMAL'],
    [/I\s+NT/gi, 'INT']
  ];

  patterns.forEach(([regex, replacement]) => {
    normalized = normalized.replace(regex, replacement);
  });

  return normalized;
}
