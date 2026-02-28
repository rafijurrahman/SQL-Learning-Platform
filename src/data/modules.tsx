import React from 'react';

export interface ModuleContent {
  id: number;
  title: string;
  coreConcept?: React.ReactNode | string; // Section A
  conceptBreakdown?: React.ReactNode | string; // Section B
  storyScenario?: React.ReactNode | string; // Section C
  dbFiddle?: string; // Section D
  practice?: string; // Section E
  solutionSql?: string;
  tips?: React.ReactNode | string; // Added to support legacy or future tips if needed
}

export const modules: Record<number, ModuleContent> = {
  1: {
    id: 1,
    title: "Foundations of Data & SQL",
    coreConcept: `ডেটা মানে শুধু সংখ্যা বা লেখা না।
ডেটা মানে বাস্তব জীবনের ঘটনা, মানুষ, লেনদেন—সব কিছুর রেকর্ড।

SQL হলো সেই ভাষা, যেটা দিয়ে আমরা বিশাল ডেটার ভেতর থেকে দরকারি তথ্যকে
দ্রুত, নির্ভুল এবং নিরাপদভাবে বের করে আনি।

এক্সেল বা খাতায় ডেটা রাখা যায়,
কিন্তু ডেটা বড় হলে সেখানে—
• ভুল হয়
• খোঁজ ধীর হয়
• নিরাপত্তা থাকে না

এই সমস্যার সমাধানই হলো Database + SQL।`,
    conceptBreakdown: `--------------------------------------------------
1) DATA কী
--------------------------------------------------

Data হলো কোনো ঘটনার কাঁচা তথ্য।

উদাহরণ:
• নাম
• জেলা
• টাকা
• তারিখ

এগুলো আলাদা আলাদা থাকলে অর্থহীন,
কিন্তু একসাথে থাকলে সিদ্ধান্ত নেওয়া যায়।

--------------------------------------------------
2) DATABASE কেন দরকার
--------------------------------------------------

Database হলো—
একটি শক্তিশালী ডিজিটাল আলমারি
যেখানে লাখ লাখ তথ্য সুশৃঙ্খলভাবে রাখা যায়।

Database সুবিধা দেয়:
• দ্রুত খোঁজ
• কম ভুল
• নিরাপত্তা
• বহু মানুষ একসাথে কাজ করতে পারে

--------------------------------------------------
3) SQL কী
--------------------------------------------------

Database যদি অফিস হয়,
SQL হলো সেই অফিসের সাথে কথা বলার ভাষা।

তুমি SQL দিয়ে বলো—
• কোন ডেটা চাই
• কোনটা বাদ যাবে
• কীভাবে সাজানো হবে

--------------------------------------------------
4) DATABASE HIERARCHY (স্তরবিন্যাস)
--------------------------------------------------

Server
→ Database
→ Schema
→ Table
→ Row & Column

Server: শক্তিশালী কম্পিউটার
Database: নির্দিষ্ট কাজের ডেটা
Schema: লজিক্যাল ভাগ
Table: মূল ডেটা
Row: একক রেকর্ড
Column: ডেটার ধরন

--------------------------------------------------
5) DATA TYPES কেন গুরুত্বপূর্ণ
--------------------------------------------------

ভুল ডেটা টাইপ = ভুল হিসাব

INT        → সংখ্যা
DECIMAL    → টাকা
VARCHAR    → নাম
DATE       → তারিখ

--------------------------------------------------
6) PRIMARY KEY
--------------------------------------------------

প্রতিটি টেবিলে এমন একটি কলাম থাকতে হবে
যেটা কখনো ডুপ্লিকেট হবে না।

এটাই Primary Key।

এটা ছাড়া ডেটাবেস নিরাপদ না।`,
    storyScenario: `যুবরাজ প্রথমবার একটি ট্যুরিজম অফিসে ডেটা ম্যানেজমেন্টের দায়িত্ব পেল।

কুয়াকাটা ভ্রমণে আসা পর্যটকদের তথ্য রাখা হচ্ছিল একটি খাতায়—
নাম, জেলা, প্রবেশ ফি, তারিখ।

শুরুর দিকে ২০–৩০ জন হলে ঠিক ছিল।
কিন্তু এক মাসে যখন ৮ হাজার পর্যটক এলো,
খাতাটা হয়ে গেল বিশৃঙ্খল।

একদিন ডিসি অফিস থেকে প্রশ্ন এলো—
“বরিশাল জেলা থেকে আসা
সকাল ১০টার আগে কতজন পর্যটক ঢুকেছে?”

যুবরাজ খাতা খুলে বসে রইল।
এক পাতা, দুই পাতা, দশ পাতা—
কোনো শেষ নেই।

সেই মুহূর্তে যুবরাজ বুঝল—

সমস্যা ডেটার না
সমস্যা ডেটা রাখার পদ্ধতির।

সে একটি Database বানাল।
একটি Table তৈরি করল—
visitor_id (Primary Key)
visitor_name (VARCHAR)
district (VARCHAR)
entry_fee (DECIMAL)
entry_time (TIME)

এখন যুবরাজ এক লাইনে প্রশ্ন করতে পারে,
আর ডেটাবেস সেকেন্ডে উত্তর দেয়।

সেই দিন যুবরাজ শিখল—

ডেটা বড় হলে
SQL ছাড়া নিয়ন্ত্রণ অসম্ভব।`
  },
  2: {
    id: 2,
    title: "Reading Data — SELECT & FROM",
    coreConcept: `ডাটাবেসে প্রশ্ন করার মানে হলো — **সব কিছু নয়, ঠিক যেটা দরকার সেটাই চাওয়া**।
SQL আপনাকে শেখায় কীভাবে বিশাল ডেটার ভেতর থেকে দরকারি অংশ আলাদা করে নিতে হয়।
এই চিন্তাটাই হলো \`SELECT\` এবং \`FROM\` এর ভিত্তি।`,
    conceptBreakdown: `**S ELECT**
- কাজ: কোন কোন কলামের ডেটা আপনি দেখতে চান তা নির্ধারণ করা
- মূল চিন্তা: “আমি কী দেখতে চাই?”
- ভুল ধারণা: সব কলাম একসাথে আনলেই ভালো — বাস্তবে এটা খারাপ অভ্যাস

উদাহরণ (ধারণাগত):
S ELECT   stall_name , stall_type

**F ROM**
- কাজ: ডেটা কোন টেবিল থেকে আসবে তা নির্ধারণ করা
- মূল চিন্তা: “ডেটা কোথা থেকে আসবে?”
- S ELECT একা অর্থহীন, F ROM ছাড়া SQL কাজ করে না

উদাহরণ (ধারণাগত):
F ROM   stalls

**S ELECT  \\***
- কাজ: টেবিলের সব কলাম দেখানো
- শেখার সময় ঠিক আছে
- প্রোডাকশন বা বাস্তব কাজে এড়িয়ে চলা উচিত`,
    storyScenario: `বরিশালে একটি বড় বইমেলা বসেছে।
মেলার ডেটা ম্যানেজমেন্টের দায়িত্ব দেওয়া হয়েছে **যুবরাজকে।

\`stalls\` নামে একটি টেবিলে অনেক তথ্য আছে:
- স্টলের আইডি
- স্টলের নাম
- মালিকের নাম
- কী ধরনের পণ্য বিক্রি হয়

একদিন যুবরাজকে বলা হলো:
“আমাদের শুধু জানতে হবে কোন কোন স্টল আছে এবং তারা কী ধরনের পণ্য বিক্রি করে।
মালিক বা আইডি এখন দরকার নেই।”

এই সমস্যাটা শুনেই যুবরাজ বুঝে গেল —
সব ডেটা দরকার নেই, **শুধু দরকারি কলামই চাই**।

তাই সে SQL-কে পরিষ্কারভাবে নির্দেশ দিলো:

S ELECT   stall_name , stall_type
F ROM   stalls ;

এই চিন্তাই SQL-এর আসল শক্তি —
ডেটা কম নেওয়া, কিন্তু সঠিক নেওয়া।`,
    dbFiddle: `CREATE TABLE stalls (
    stall_id INT PRIMARY KEY,
    stall_name VARCHAR(50),
    owner_name VARCHAR(50),
    stall_type VARCHAR(30)
);

INSERT INTO stalls VALUES
(1,'Pottery House','Abid','Clayware'),
(2,'Green Plant Nursery','Salma','Plants'),
(3,'Barishal Sweets','Joy','Food'),
(4,'Heritage Clothing','Karim','Clothing');`,
    practice: "stalls টেবিল থেকে stall_name এবং owner_name বের করুন।",
    solutionSql: "SELECT stall_name, owner_name FROM stalls;"
  },
  3: {
    id: 3,
    title: "Filtering Rows — WHERE",
    coreConcept: `ডাটাবেসে প্রশ্ন করা মানে শুধু ডেটা দেখা নয়,
**ডেটার ভেতর থেকে শর্ত অনুযায়ী বাছাই করা**।

\`WHERE\` হলো সেই জায়গা যেখানে আপনি SQL-কে বলেন —
“সব না, শুধু যেগুলো আমার শর্ত মানে সেগুলোই দাও।”

এটা অনেকটা ভর্তি পরীক্ষার মতো —
সবাই পরীক্ষা দেয়, কিন্তু পাশ করে শুধু নির্দিষ্ট শর্ত পূরণকারীরা।`,
    conceptBreakdown: `**W HERE**
- কাজ: নির্দিষ্ট শর্ত দিয়ে রো (Row) ফিল্টার করা
- মূল চিন্তা: “কোন রো গুলো রাখবো, কোনগুলো বাদ দেবো”

\`WHERE\` সবসময়:
F ROM এর পরে
S ELECT এর আগে (logical execution এ)

---

**Comparison Operators (মূল তুলনা চিহ্ন)**

\`=\`
- যখন নির্দিষ্ট একটি মান দরকার
- উদাহরণ চিন্তা: ঠিক ১০০ টাকা

\`!=\` বা \`<>\`
- যখন কোনো মান বাদ দিতে চাই
- উদাহরণ চিন্তা: বরিশাল ছাড়া সবাই

\`>\` , \`<\`
- বড় বা ছোট মানের তুলনা
- সাধারণত সংখ্যা বা তারিখে ব্যবহার হয়

\`>=\` , \`<=\`
- সীমাসহ তুলনা
- বাউন্ডারি ভ্যালু রাখার জন্য জরুরি

---

**NULL Handling**

\`IS NULL\`
- যেখানে কোনো তথ্যই নেই
- NULL কখনো 0 বা খালি স্ট্রিং না

\`IS NOT NULL\`
- যেখানে তথ্য নিশ্চিতভাবে আছে

⚠️ ভুল নিয়ম:
\`= NULL\` ❌
এটা কখনো কাজ করে না`,
    storyScenario: `বরিশালের একটি ঐতিহাসিক স্থানে প্রতিদিন ভিজিটর আসে।
এই ভিজিটর লগ দেখাশোনার দায়িত্ব দেওয়া হয়েছে **যুবরাজ**কে।

\`church_logs\` নামের একটি টেবিলে আছে:
- visitor_name
- entry_fee
- arrival_date

একদিন কর্তৃপক্ষ যুবরাজকে বললো:

“আজ যারা **ঠিক ১০০ টাকা** দিয়েছে
এবং যাদের **নাম লেখা আছে**,
শুধু তাদের তালিকা চাই।”

প্রথমে যুবরাজ ভুল করে ভাবলো —
সব ডেটা নিয়ে পরে ফিল্টার করবে।

কিন্তু সাথে সাথে সে বুঝে গেল —
এটা SQL-এর কাজ না, এটা \`WHERE\`-এর কাজ।

তাই সে শর্তগুলো ভেঙে চিন্তা করলো:
- ঠিক ১০০ টাকা → \`=\`
- নাম খালি না → \`IS NOT NULL\`

শেষ পর্যন্ত যুবরাজ SQL-কে পরিষ্কার নির্দেশ দিলো:

S ELECT   visitor_name
F ROM   church_logs
W HERE   entry_fee   =   100
A ND   visitor_name   I S   N O T   N U L L ;

এইভাবে যুবরাজ কয়েক হাজার রো থেকে
মাত্র প্রয়োজনীয় কয়েকটি রো আলাদা করে ফেললো।

এটাই \`WHERE\` —
ভুল শর্ত দিলে ভুল রিপোর্ট,
সঠিক শর্ত দিলে নির্ভুল সিদ্ধান্ত।`,
    dbFiddle: `CREATE TABLE church_logs (
    log_id INT PRIMARY KEY,
    visitor_name VARCHAR(50),
    entry_fee INT,
    home_city VARCHAR(30)
);

INSERT INTO church_logs VALUES
(1,'Rafiq',100,'Barishal'),
(2,'Mina',50,'Dhaka'),
(3,'Tariq',100,'Khulna'),
(4,'Sajid',20,'Barishal');`,
    practice: "যারা ১০০ টাকা দেননি তাদের নাম বের করুন।",
    solutionSql: "SELECT visitor_name FROM church_logs WHERE entry_fee != 100;"
  },
  4: {
    id: 4,
    title: "Sorting & Limiting Results",
    coreConcept: `ডাটাবেস থেকে ডেটা আনলে SQL স্বাভাবিকভাবে কোনো নির্দিষ্ট ক্রম মানে না।
সে শুধু যেভাবে ডেটা আছে সেভাবেই রো ফিরিয়ে দেয়।

ORDER BY হলো সেই জায়গা যেখানে তুমি SQL-কে বলো—
“ডেটা ঠিক আছে, এখন এটাকে সাজাও।”

এটা অনেকটা পরীক্ষার খাতার মতো—
আগে সব নম্বর আছে,
কিন্তু ORDER BY না দিলে মেধাক্রম নেই।`,
    conceptBreakdown: `ORDER BY
→ কাজ: রেজাল্টের রো গুলো সাজানো
→ কেন দরকার: মানুষের পড়ার উপযোগী রিপোর্ট বানাতে
→ ব্যবহার হয়: SELECT এর একদম শেষে

--------------------------------------------------

ASC (Ascending)
→ কাজ: ছোট থেকে বড় সাজায়
→ ডিফল্ট আচরণ (লিখলেও না লিখলেও হয়)

→ উদাহরণ:
ORDER BY marks ASC

→ ফলাফল:
40, 50, 60, 80


DESC (Descending)
→ কাজ: বড় থেকে ছোট সাজায়
→ উদাহরণ:
ORDER BY marks DESC

→ ফলাফল:
80, 60, 50, 40


--------------------------------------------------

Single Column Sorting

→ উদাহরণ:
ORDER BY entry_fee DESC

→ ব্যবহার হয়:
যখন একটাই মান অনুযায়ী সাজাতে চাও


--------------------------------------------------

Multiple Column Sorting

→ কাজ:
প্রথম কলামে টাই হলে দ্বিতীয় কলাম কাজ করে

→ উদাহরণ:
ORDER BY city ASC, entry_fee DESC

→ মানে:
প্রথমে শহর অনুযায়ী,
একই শহরের মধ্যে ফি অনুযায়ী বড় থেকে ছোট


--------------------------------------------------

Text vs Number Sorting

Text:
ORDER BY name ASC
→ A থেকে Z

Number:
ORDER BY price DESC
→ বড় থেকে ছোট


--------------------------------------------------

Common Mistakes

ভুল ১:
ORDER BY এর আগে WHERE না লেখা

ভুল ২:
ORDER BY এমন কলাম লেখা
যেটা টেবিলেই নেই

ভুল ৩:
ORDER BY কে WHERE এর আগে লেখা
(SQL এ ORDER BY সবশেষে)`,
    storyScenario: `বরিশালের Bells Park-এ প্রতিদিন ভিজিটর আসে।
সব তথ্য রাখা আছে park_visits টেবিলে।

কলাম:
- visitor_name
- entry_fee
- visit_time

ম্যানেজার বললো—
“আজকের ভিজিটরদের নাম চাই,
কিন্তু ফি অনুযায়ী বড় থেকে ছোট সাজানো।”

ভুল চিন্তা:
ডেটা আনলেই ঠিক থাকবে

ভুল কোড:
SELECT visitor_name, entry_fee
FROM park_visits;

ফলাফল:
এলোমেলো তালিকা


সঠিক চিন্তা:
আগে ডেটা আনবো,
তারপর সাজাবো


--------------------------------------------------

### Final Complete SQL Query

SELECT visitor_name, entry_fee
FROM park_visits
ORDER BY entry_fee DESC;


--------------------------------------------------

### Multiple Condition Example

একই ফি হলে নাম অনুযায়ী সাজানো:

SELECT visitor_name, entry_fee
FROM park_visits
ORDER BY entry_fee DESC, visitor_name ASC;


--------------------------------------------------

### Extra Practice Queries

সব ছাত্র নম্বর অনুযায়ী ছোট থেকে বড়:
SELECT name, marks
FROM students
ORDER BY marks ASC;

সব অর্ডার নতুন থেকে পুরোনো:
SELECT order_id, order_date
FROM orders
ORDER BY order_date DESC;`,
    dbFiddle: `CREATE TABLE house_entry (
    entry_id INT PRIMARY KEY,
    visitor_name VARCHAR(50),
    entry_fee INT
);

INSERT INTO house_entry VALUES
(1,'Arif',50),
(2,'Zayan',150),
(3,'Baker',80),
(4,'Munna',30),
(5,'Sana',200);`,
    practice: "সবচেয়ে কম ফি দেওয়া ২ জন বের করুন।",
    solutionSql: "SELECT TOP 2 visitor_name, entry_fee FROM house_entry ORDER BY entry_fee ASC;"
  },
  5: {
    id: 5,
    title: "Aggregation Basics",
    coreConcept: `Aggregation মানে হলো অনেকগুলো row থেকে সারসংক্ষেপ (summary) তথ্য বের করা।
এখানে SQL আর আলাদা আলাদা row নিয়ে চিন্তা করে না, বরং পুরো ডেটাকে একত্রে বা group আকারে দেখে।

সহজভাবে:
Row-level data → Group-level insight

যখন প্রশ্ন হয়—
মোট কত?
গড় কত?
সবচেয়ে বড় বা ছোট কোনটা?
কোন ক্যাটাগরি থেকে কত এসেছে?

তখনই aggregation দরকার হয়।`,
    conceptBreakdown: `1) COUNT()
কাজ: মোট কয়টি row আছে তা গুনে।
কখন ব্যবহার: মোট সংখ্যা জানতে।

COUNT(*)           → সব row গুনে  
COUNT(column_name) → NULL বাদ দিয়ে গুনে

2) SUM()
কাজ: সংখ্যার যোগফল বের করে।
কখন ব্যবহার: মোট বিক্রি, মোট আয়।

SUM(amount)

3) AVG()
কাজ: গড় মান বের করে।
কখন ব্যবহার: গড় দাম, গড় স্কোর।

AVG(score)

4) MIN()
কাজ: সবচেয়ে ছোট মান বের করে।

MIN(price)

5) MAX()
কাজ: সবচেয়ে বড় মান বের করে।

MAX(price)

6) GROUP BY (সবচেয়ে গুরুত্বপূর্ণ নিয়ম)

Aggregation ব্যবহার করলে:
SELECT অংশে যে কলাম aggregation নয়,
সেগুলো অবশ্যই GROUP BY তে থাকতে হবে।

ভুল উদাহরণ:
SELECT product, SUM(amount)
FROM sales;

সঠিক উদাহরণ:
SELECT product, SUM(amount)
FROM sales
GROUP BY product;

কারণ SQL জানে না কোন product-এর জন্য কোন SUM দেখাবে।`,
    storyScenario: `বরিশালের বিখ্যাত ৭ মাইল চায়ের দোকানে প্রতিদিন অনেক ধরনের চা বিক্রি হয়।
ডেটাবেস টেবিল tea_sales এ আছে:

tea_name
cups_sold
price

দোকানদারের প্রশ্নগুলো:
মোট কত কাপ চা বিক্রি হয়েছে? → SUM(cups_sold)
কয় ধরনের চা বিক্রি হয়েছে? → COUNT(DISTINCT tea_name)
গড়ে এক কাপে কত দাম? → AVG(price)
সবচেয়ে বেশি দামের চা কোনটা? → MAX(price)
প্রতিটি চা থেকে মোট কত আয়? → GROUP BY tea_name

এই প্রশ্নগুলোর উত্তর row ধরে চিন্তা করলে পাওয়া যাবে না।
Aggregation ছাড়া এই রিপোর্ট অসম্ভব।


FINAL COMPLETE SQL QUERY

SELECT
    tea_name,
    COUNT(*)       AS total_orders,
    SUM(cups_sold) AS total_cups,
    SUM(price)     AS total_revenue,
    AVG(price)     AS avg_price,
    MIN(price)     AS min_price,
    MAX(price)     AS max_price
FROM tea_sales
GROUP BY tea_name;

এই একটিমাত্র query দেখায়:
প্রতিটি চায়ের জন্য
মোট অর্ডার
মোট কাপ
মোট আয়
গড় দাম
সর্বনিম্ন ও সর্বোচ্চ দাম

এটাই Aggregation-এর সঠিক, পূর্ণাঙ্গ ও প্রফেশনাল ব্যবহার।`,
    dbFiddle: `CREATE TABLE tea_sales (
    sale_id INT PRIMARY KEY,
    tea_name VARCHAR(50),
    quantity INT
);

INSERT INTO tea_sales VALUES
(1,'Malai Tea',2),
(2,'Ginger Tea',1),
(3,'Malai Tea',3),
(4,'Lemon Tea',2);`,
    practice: "প্রতিটি চায়ের মোট বিক্রি হওয়া কাপ বের করুন।",
    solutionSql: "SELECT tea_name, SUM(quantity) AS total_cups FROM tea_sales GROUP BY tea_name;"
  },
  6: {
    id: 6,
    title: "Filtering Aggregated Data — HAVING",
    coreConcept: null,
    conceptBreakdown: null,
    storyScenario: null,
    dbFiddle: `CREATE TABLE guava_market (
    entry_id INT PRIMARY KEY,
    boat_id INT,
    quantity_kg INT
);

INSERT INTO guava_market VALUES
(1,101,200),
(2,101,400),
(3,102,150),
(4,103,800);`,
    practice: "যেসব boat_id এর মোট পেয়ারা ৩০০ কেজির বেশি সেগুলো বের করুন।",
    solutionSql: "SELECT boat_id, SUM(quantity_kg) FROM guava_market GROUP BY boat_id HAVING SUM(quantity_kg) > 300;"
  },
  7: {
    id: 7,
    title: "DISTINCT & Duplicate Thinking",
    coreConcept: `ডাটাবেসে ডুপ্লিকেট ডেটা থাকা মানেই ভুল ডেটা নয়।
একই জেলা, একই ক্যাটাগরি বা একই স্ট্যাটাস বহু রো-তে স্বাভাবিকভাবেই থাকতে পারে।

সমস্যা হয় তখনই,
যখন প্রশ্ন হয় —
“কয়টা আলাদা জেলা আছে?”
কিন্তু SQL একই জেলার নাম বারবার দেখায়।

এই সমস্যার সমাধান হলো DISTINCT।

DISTINCT মানে —
একই ভ্যালু বারবার দেখাবে না,
একবারই দেখাবে।`,
    conceptBreakdown: `1) DISTINCT কী করে

→ SELECT করা কলামের ভেতর থেকে ডুপ্লিকেট মান বাদ দেয়  
→ শুধুমাত্র ইউনিক ভ্যালু দেখায়  

উদাহরণ (safe format):

S E L E C T   D I S T I N C T   v i s i t o r _ d i s t r i c t  
F R O M   b e a c h _ v i s i t o r s ;

যদি Barishal ১০০ বারও থাকে, আউটপুটে একবারই আসবে।

--------------------------------------------------

2) DISTINCT কোথায় বসে

DISTINCT সবসময় SELECT-এর ঠিক পরে বসে।

ভুল ধারণা:

S E L E C T   v i s i t o r _ n a m e ,   D I S T I N C T   v i s i t o r _ d i s t r i c t  
F R O M   b e a c h _ v i s i t o r s ;

এটা ভুল।

সঠিক চিন্তা:

S E L E C T   D I S T I N C T   v i s i t o r _ d i s t r i c t  
F R O M   b e a c h _ v i s i t o r s ;

--------------------------------------------------

3) COUNT(*) বনাম COUNT(DISTINCT)

মোট রো সংখ্যা:

S E L E C T   C O U N T ( * )  
F R O M   b e a c h _ v i s i t o r s ;

আলাদা জেলার সংখ্যা:

S E L E C T   C O U N T ( D I S T I N C T   v i s i t o r _ d i s t r i c t )  
F R O M   b e a c h _ v i s i t o r s ;

রিপোর্টে ভুল সংখ্যা আসার সবচেয়ে বড় কারণ এখানেই।

--------------------------------------------------

4) কখন DISTINCT ব্যবহার করা উচিত নয়

• Primary Key কলামে  
• আগে থেকেই ইউনিক ডেটা হলে  
• অকারণে সব রিপোর্টে  

কারণ:
DISTINCT ব্যবহার করলে SQL-কে সব রো তুলনা করতে হয়,
ফলে পারফরম্যান্স কমে।`,
    storyScenario: `ধরো তুমি তালতলী সমুদ্র সৈকতের দায়িত্বে আছো।
প্রতিদিন ভিজিটরদের নাম ও জেলা জমা হচ্ছে
b e a c h _ v i s i t o r s টেবিলে।

ডিসি অফিস প্রশ্ন করলো:
“আজ কোন কোন জেলা থেকে মানুষ এসেছে?”

তুমি যদি লেখো:

S E L E C T   v i s i t o r _ d i s t r i c t  
F R O M   b e a c h _ v i s i t o r s ;

তাহলে রিপোর্টে আসবে:
Barishal  
Barishal  
Dhaka  
Barishal  
Khulna  

রিপোর্ট একদম অগোছালো।

তখন সঠিক চিন্তা করলে:

S E L E C T   D I S T I N C T   v i s i t o r _ d i s t r i c t  
F R O M   b e a c h _ v i s i t o r s ;

এখন রিপোর্ট পরিষ্কার।

এরপর প্রশ্ন এলো:
“কয়টা আলাদা জেলা?”

সঠিক কুয়েরি:

S E L E C T   C O U N T ( D I S T I N C T   v i s i t o r _ d i s t r i c t )  
F R O M   b e a c h _ v i s i t o r s ;

--------------------------------------------------

Final Takeaway

• DISTINCT ডেটা ঠিক করে না, রিপোর্ট ঠিক করে  
• COUNT(*) আর COUNT(DISTINCT) গুলিয়ে ফেললে রিপোর্ট ভুল  
• অকারণে DISTINCT মানে পারফরম্যান্স ক্ষতি`,
    dbFiddle: `CREATE TABLE beach_visitors (
    visit_id INT PRIMARY KEY,
    visitor_name VARCHAR(50),
    visitor_district VARCHAR(50)
);

INSERT INTO beach_visitors VALUES
(1,'Arif','Barishal'),
(2,'Sajid','Dhaka'),
(3,'Mina','Barishal'),
(4,'Sumon','Khulna');`,
    practice: "visitor_district এর ইউনিক তালিকা বের করুন।",
    solutionSql: "SELECT DISTINCT visitor_district FROM beach_visitors;"
  },
  8: {
    id: 8,
    title: "Logical & Range Operators",
    coreConcept: `বাস্তবে ডেটাবেসে প্রশ্ন কখনো এক শর্তে শেষ হয় না।
আমরা প্রায়ই বলি—

• এই শর্তও লাগবে  
• ওটাই বা হলে চলবে  
• একটা রেঞ্জের ভেতর হতে হবে  

SQL-এ একাধিক শর্ত একসাথে চিন্তা করার এই ক্ষমতাই আসে
Logical ও Range Operators থেকে।

ভুল অপারেটর ব্যবহার করলে
ডেটা ঠিক থাকলেও রিপোর্ট পুরো ভুল হয়ে যায়।`,
    conceptBreakdown: `1) AND — সব শর্ত সত্য হতে হবে

→ কাজ: একাধিক শর্ত একসাথে বাধ্যতামূলক করে  
→ ব্যবহার হয় যখন সব কন্ডিশন মানতেই হবে  

উদাহরণ:

S ELECT  
*  
F ROM   tourists  
W HERE   age >= 18  
A ND   has_permit = 'Yes' ;

এখানে বয়স ঠিক হলেও পারমিট না থাকলে রো বাদ যাবে।

ভুল প্রয়োগ:
AND বেশি দিলে অনেক সময় রেজাল্ট ফাঁকা আসে।

--------------------------------------------------

2) OR — যেকোনো একটি শর্ত সত্য হলেই চলবে

→ কাজ: বিকল্প শর্ত দেয়  
→ ব্যবহার হয় যখন একাধিক অপশন গ্রহণযোগ্য  

উদাহরণ:

S ELECT  
*  
F ROM   tourists  
W HERE   home_district = 'Barishal'  
O R   home_district = 'Bhola' ;

একটা শর্ত মিললেই রো আসবে।

ভুল প্রয়োগ:
OR ব্যবহার করলে রেজাল্ট হঠাৎ অনেক বেড়ে যায়।

--------------------------------------------------

3) BETWEEN — একটি রেঞ্জের ভেতর

→ কাজ: দুই মানের মাঝখানে ফিল্টার করে  
→ সীমার দুই পাশই ধরা হয় (Inclusive)

উদাহরণ:

S ELECT  
*  
F ROM   tourists  
W HERE   age B ETWEEN 20 A ND 40 ;

২০ এবং ৪০ দুটোই অন্তর্ভুক্ত।

ভুল প্রয়োগ:
BETWEEN 40 AND 20 লিখলে রেজাল্ট আসবে না।

--------------------------------------------------

4) IN — একাধিক OR এক লাইনে

→ কাজ: অনেকগুলো মানের মধ্যে মিল খোঁজে  
→ OR-এর পরিষ্কার ও পেশাদার বিকল্প  

উদাহরণ:

S ELECT  
*  
F ROM   tourists  
W HERE   home_district I N ('Barishal','Bhola','Patuakhali') ;

এটা নিচের মতোই কাজ করে কিন্তু বেশি পরিষ্কার:

home_district = 'Barishal'  
OR home_district = 'Bhola'  
OR home_district = 'Patuakhali'

--------------------------------------------------

5) NOT — শর্ত উল্টে দেয়

→ কাজ: যেটা চাও না সেটা বাদ দেয়  

উদাহরণ:

S ELECT  
*  
F ROM   tourists  
W HERE   NOT age < 18 ;

মানে বয়স ১৮ বা তার বেশি।`,
    storyScenario: `ধরো তুমি মনপুরা দ্বীপ ভ্রমণের অনুমতি দিচ্ছো।
নিয়ম হলো—

• বয়স ১৮ থেকে ৬০ → BETWEEN  
• পারমিট থাকতে হবে → AND  
• বারিশাল বা ভোলা জেলার হলে ছাড় → OR  

ভুল লজিক লিখলে দুই রকম বিপদ হয়—

• AND বেশি দিলে কেউই কোয়ালিফাই করবে না  
• OR বেশি দিলে অযোগ্যরাও ঢুকে যাবে  

সঠিক লজিক:

S ELECT  
tourist_name  
F ROM   tourists  
W HERE   age B ETWEEN 18 A ND 60  
A ND   has_permit = 'Yes'  
A ND   home_district I N ('Barishal','Bhola') ;

এইভাবে SQL-কে পরিষ্কারভাবে বলা যায়
কে যাবে, কে যাবে না।

--------------------------------------------------

Final Takeaway

• AND = কঠোর  
• OR = নমনীয়  
• BETWEEN = রেঞ্জ  
• IN = পরিষ্কার OR  
• ভুল কম্বিনেশন = ভুল রিপোর্ট`,
    dbFiddle: `CREATE TABLE tourists (
    tourist_id INT PRIMARY KEY,
    tourist_name VARCHAR(50),
    age INT,
    home_district VARCHAR(50),
    has_permit VARCHAR(10)
);

INSERT INTO tourists VALUES
(1,'Abid',25,'Barishal','Yes'),
(2,'Sultana',17,'Dhaka','Yes'),
(3,'Kamal',45,'Bhola','No'),
(4,'Rahim',65,'Barishal','Yes'),
(5,'Mina',30,'Khulna','Yes');`,
    practice: "tourists টেবিল থেকে যাদের বয়স ২০–৪০ এর মধ্যে এবং যারা Barishal অথবা Bhola জেলার বাসিন্দা তাদের তালিকা বের করুন।",
    solutionSql: "SELECT tourist_name FROM tourists WHERE age BETWEEN 20 AND 40 AND home_district IN ('Barishal', 'Bhola');"
  },
  9: {
    id: 9,
    title: "Pattern Matching — LIKE",
    coreConcept: `সব সময় আমাদের কাছে ডেটার পুরো নাম বা সম্পূর্ণ মান জানা থাকে না।
অনেক সময় আমরা শুধু জানি—

• নামটা এই অক্ষর দিয়ে শুরু  
• নামের শেষে এই শব্দ আছে  
• মাঝখানে কিছু একটা মিল আছে  

এই ধরনের আংশিক মিল (Partial Match) খোঁজার জন্যই
SQL-এ LIKE ব্যবহার করা হয়।

LIKE মূলত টেক্সট ফিল্টার করার একটি প্যাটার্ন-ভিত্তিক উপায়।`,
    conceptBreakdown: `1) LIKE — আংশিক মিল খোঁজে

→ কাজ: টেক্সটের ভেতরে প্যাটার্ন মিলিয়ে দেখে  
→ সাধারণ = দিয়ে যেটা সম্ভব নয়, LIKE দিয়ে সেটা করা যায়  

--------------------------------------------------

2) % (Percent Wildcard)

→ কাজ: যেকোনো সংখ্যক অক্ষর বোঝায় (০ বা তার বেশি)

উদাহরণ ১: নাম S দিয়ে শুরু

S ELECT  
*  
F ROM   launches  
W HERE   launch_name L IKE 'S%' ;

মানে:
S দিয়ে শুরু, পরে যা খুশি থাকতে পারে।

উদাহরণ ২: নাম River দিয়ে শেষ

S ELECT  
*  
F ROM   launches  
W HERE   launch_name L IKE '%River' ;

উদাহরণ ৩: নামের মাঝে River আছে

S ELECT  
*  
F ROM   launches  
W HERE   launch_name L IKE '%River%' ;

--------------------------------------------------

3) _ (Underscore Wildcard)

→ কাজ: ঠিক একটি অক্ষর বোঝায়  

উদাহরণ: নাম ৫ অক্ষরের, শেষ অক্ষর A

S ELECT  
*  
F ROM   visitors  
W HERE   visitor_name L IKE '____A' ;

এখানে _ _ _ _ = চারটি নির্দিষ্ট অক্ষর

--------------------------------------------------

4) LIKE বনাম =

= ব্যবহার করলে:
পুরো মান হুবহু মিলতে হবে  

LIKE ব্যবহার করলে:
আংশিক মিলেও রেজাল্ট আসবে`,
    storyScenario: `ধরো তুমি লেবুখালী লঞ্চঘাটে দাঁড়িয়ে আছো।
তোমার বন্ধু আসছে একটি লঞ্চে।

তুমি শুধু জানো—

• লঞ্চের নাম S দিয়ে শুরু  
• অথবা নামের শেষে 7 আছে  

পুরো নাম না জানলে = কাজ করবে না।

ভুল চেষ্টা:

launch_name = 'S'  
→ কোনো রেজাল্ট আসবে না

সঠিক লজিক:

S ELECT  
launch_name  
F ROM   launches  
W HERE   launch_name L IKE 'S%' ;

আর যদি শেষের নাম্বার খুঁজতে চাও:

S ELECT  
launch_name  
F ROM   launches  
W HERE   launch_name L IKE '%7' ;

--------------------------------------------------

Common Mistakes (ভুল করলে যা হবে)

• '%Name' → ইনডেক্স কাজ করে না  
• LIKE ভুল জায়গায় দিলে রেজাল্ট ধীর হয়  
• সংখ্যা কলামে LIKE ব্যবহার করা ভুল চিন্তা  

--------------------------------------------------

Final Takeaway

• LIKE = আংশিক মিল  
• % = অনেক অক্ষর  
• _ = এক অক্ষর  
• = কখনো LIKE-এর বিকল্প নয়`,
    dbFiddle: `CREATE TABLE launches (
    launch_id INT PRIMARY KEY,
    launch_name VARCHAR(50),
    capacity INT
);

INSERT INTO launches VALUES
(1,'Sunderban 10',500),
(2,'Green Line 2',300),
(3,'Surovi 7',450),
(4,'Kirtankhola River Queen',600),
(5,'MV Abid',200);`,
    practice: "launches টেবিল থেকে যেসব লঞ্চের নামের শেষে 7 অথবা 10 আছে সেগুলোর নাম বের করুন।",
    solutionSql: "SELECT launch_name FROM launches WHERE launch_name LIKE '%7' OR launch_name LIKE '%10';"
  },
  10: {
    id: 10,
    title: "Joining Tables — INNER JOIN",
    coreConcept: `ডেটাবেসে তথ্য কখনো এক টেবিলে সব রাখা হয় না।
একই তথ্য বারবার না রেখে ডেটাকে ভাগ করে রাখা হয়।

INNER JOIN মানে হলো—
দুটি টেবিলের মধ্যে যেখানে মিল আছে,
শুধু সেই মিল থাকা রো গুলোকে একসাথে দেখানো।

মিল না থাকলে সেই রো বাদ পড়ে যাবে।`,
    conceptBreakdown: `1) INNER JOIN কী করে

→ দুটি টেবিলকে পাশে পাশে বসায়  
→ মিলের ভিত্তি হয় একটি কমন কলাম (Key)  
→ দুই টেবিলেই মিল থাকতে হবে  

--------------------------------------------------

2) JOIN Syntax (Mental Structure)

S ELECT  
    column_list  
F ROM   table_A  
I N N E R   J O I N   table_B  
O N   table_A.key = table_B.key ;

--------------------------------------------------

3) Table Alias (খুব গুরুত্বপূর্ণ)

→ বড় নাম ছোট করে লেখার জন্য  
→ ambiguity (confusion) এড়াতে

উদাহরণ:

S ELECT  
    b.boat_name ,  
    m.captain_name  
F ROM   boats   A S   b  
I N N E R   J O I N   masters   A S   m  
O N   b.boat_id = m.boat_id ;

--------------------------------------------------

4) INNER JOIN কী দেখায় না

• যেসব রো শুধু এক টেবিলে আছে  
• যাদের মিল নেই  
→ তারা রেজাল্টে আসবে না`,
    storyScenario: `ধরো তুমি কীর্তনখোলা নদীর ঘাটে কাজ করছো।

তোমার কাছে দুইটা খাতা আছে—

খাতা ১: boats  
boat_id | boat_name  

খাতা ২: masters  
master_id | captain_name | boat_id  

প্রশ্ন:
“কোন মাঝি কোন নৌকা চালাচ্ছে?”

এটা এক খাতা দেখে পাওয়া সম্ভব না।
দুটো খাতার তথ্য মিলাতে হবে।

ভুল চিন্তা:

S ELECT  
*  
F ROM   boats , masters ;

→ এতে সবকিছু সবকিছুর সাথে জুড়ে যাবে  
→ একে বলে Cross Join (ভুল)

সঠিক চিন্তা:

S ELECT  
    b.boat_name ,  
    m.captain_name  
F ROM   boats   b  
I N N E R   J O I N   masters   m  
O N   b.boat_id = m.boat_id ;

ফলাফল:
• শুধু সেই মাঝির নাম আসবে  
• যাদের নৌকার ID দুই টেবিলেই আছে  

--------------------------------------------------

Common Mistakes (খুব জরুরি)

• O N ক্লজ না দিলে ভুল রেজাল্ট  
• Alias না দিলে ambiguous column error  
• INNER JOIN ব্যবহার করলে missing data বাদ পড়ে যায়  

--------------------------------------------------

Final Takeaway

• INNER JOIN = মিল থাকা রো  
• দুই টেবিলেই match লাগবে  
• missing data চাইলে OUTER JOIN লাগবে`,
    dbFiddle: `CREATE TABLE boats (
    boat_id INT PRIMARY KEY,
    boat_name VARCHAR(50)
);

CREATE TABLE masters (
    master_id INT PRIMARY KEY,
    captain_name VARCHAR(50),
    boat_id INT
);

INSERT INTO boats VALUES
(101,'Sonar Tori'),
(102,'Ruposhi Bangla'),
(103,'Meghna Express');

INSERT INTO masters VALUES
(1,'Abdul Karim',101),
(2,'Sujon Mia',102),
(3,'Hafizur Rahman',105);`,
    practice: "boats এবং masters টেবিল থেকে নৌকা ও মাঝিদের নামের তালিকা বের করুন। শুধু যেসব boat_id দুই টেবিলেই আছে সেগুলো দেখান।",
    solutionSql: "SELECT b.boat_name, m.captain_name FROM boats AS b INNER JOIN masters AS m ON b.boat_id = m.boat_id;"
  },
  11: {
    id: 11,
    title: "Outer Joins",
    coreConcept: `INNER JOIN শুধু “মিল আছে” এমন ডেটা দেখায়।
কিন্তু বাস্তবে আমাদের অনেক সময় দরকার হয়—

• যাদের তথ্য আছে  
• কিন্তু অন্য টেবিলে মিল নেই  
→ তবুও তাদের দেখাতে হবে

এই সমস্যার সমাধানই হলো OUTER JOIN।

OUTER JOIN মানে:
“মিল থাকুক বা না থাকুক, নির্দিষ্ট এক পাশের সব ডেটা দেখাও।”`,
    conceptBreakdown: `1) LEFT JOIN

→ বাম (LEFT) টেবিলের সব রো থাকবে  
→ ডান (RIGHT) টেবিলে মিল না পেলে  
→ ডান পাশের কলামগুলো হবে NULL

Structure:

S ELECT  
    columns  
F ROM   table_A  
L E F T   J O I N   table_B  
O N   table_A.key = table_B.key ;

--------------------------------------------------

2) RIGHT JOIN

→ ডান (RIGHT) টেবিলের সব রো থাকবে  
→ বাম পাশে মিল না পেলে  
→ বাম পাশের কলাম হবে NULL

Structure:

S ELECT  
    columns  
F ROM   table_A  
R I G H T   J O I N   table_B  
O N   table_A.key = table_B.key ;

(প্র্যাকটিক্যালি কম ব্যবহৃত)

--------------------------------------------------

3) FULL JOIN

→ দুই টেবিলের সব রো দেখায়  
→ মিল থাকলে পাশাপাশি  
→ মিল না থাকলে এক পাশ NULL

Structure:

S ELECT  
    columns  
F ROM   table_A  
F U L L   J O I N   table_B  
O N   table_A.key = table_B.key ;

--------------------------------------------------

4) INNER JOIN vs OUTER JOIN

INNER JOIN:
→ দুই পাশে মিল থাকতে হবে

OUTER JOIN:
→ নির্দিষ্ট পাশে মিল না থাকলেও দেখাবে`,
    storyScenario: `ধরো চরমোনাই নদীর পাড়ে বড় মাহফিল হচ্ছে।

তোমার কাছে দুইটা লিস্ট—

registrations  
→ যারা আগে নাম লিখিয়েছে

check_ins  
→ যারা আজ ঘাটে এসে পৌঁছেছে

প্রশ্ন:
“সব রেজিস্ট্রেশন করা মানুষ দেখাও,
আর সাথে দেখাও কে কে এসেছে”

যদি INNER JOIN ব্যবহার করো:

→ যারা আসে নাই  
→ তারা পুরো রিপোর্ট থেকেই উধাও

এটা বাস্তবের জন্য ভুল।

সঠিক চিন্তা: LEFT JOIN

S ELECT  
    r.visitor_name ,  
    c.checkin_time  
F ROM   registrations   r  
L E F T   J O I N   check_ins   c  
O N   r.reg_id = c.reg_id ;

ফলাফল:

• সবাই থাকবে  
• যারা আসে নাই → checkin_time = NULL  

এখন তুমি বুঝতে পারছো—
কে এখনও আসেনি।

--------------------------------------------------

Common Mistakes (Critical)

• INNER JOIN ব্যবহার করে missing data হারানো  
• LEFT / RIGHT কোন টেবিল “main” সেটা না বোঝা  
• NULL দেখে panic করা (NULL মানে “মিল নেই”)  

--------------------------------------------------

Final Takeaway

• LEFT JOIN = সব master data দেখাও  
• NULL মানে = অন্য পাশে match নেই  
• business report এ OUTER JOIN অত্যন্ত গুরুত্বপূর্ণ`,
    dbFiddle: `CREATE TABLE registrations (
    reg_id INT PRIMARY KEY,
    visitor_name VARCHAR(50)
);

CREATE TABLE check_ins (
    check_id INT PRIMARY KEY,
    reg_id INT,
    checkin_time TIME
);

INSERT INTO registrations VALUES
(1,'Karim Uddin'),
(2,'Sultana Khan'),
(3,'Abul Kashem'),
(4,'Mina Akter');

INSERT INTO check_ins VALUES
(101,1,'09:00:00'),
(102,3,'10:30:00');`,
    practice: "নিবন্ধিত সবার নাম ও তাদের check_id দেখান। যারা এখনও চেক-ইন করেননি তাদের নামও রাখতে হবে।",
    solutionSql: "SELECT r.visitor_name, c.check_id FROM registrations AS r LEFT JOIN check_ins AS c ON r.reg_id = c.reg_id;"
  },
  12: {
    id: 12,
    title: "Anti Join & Existence Checks",
    coreConcept: `JOIN সাধারণত বলে—
“কোন ডেটা দুই জায়গাতেই আছে?”

কিন্তু বাস্তবে অনেক সময় প্রশ্নটা উল্টো হয়—

• কে টাকা দিয়েছে কিন্তু আসেনি  
• কোন অর্ডার আছে কিন্তু ডেলিভারি হয়নি  
• কোন কাস্টমার রেজিস্টার করেছে কিন্তু কোনো অর্ডার দেয়নি  

এই “নেই” বা “অনুপস্থিত” ডেটা খোঁজার চিন্তাটাই হলো
ANTI JOIN।

SQL-এ আলাদা করে ANTI JOIN নামের কমান্ড নেই,
কিন্তু লজিক্যালভাবে আমরা এটি তৈরি করি।`,
    conceptBreakdown: `ANTI JOIN করার দুইটি স্ট্যান্ডার্ড পদ্ধতি আছে।

--------------------------------------------------

1) LEFT JOIN + IS NULL (সবচেয়ে কমন)

Logic:
→ সব ডেটা নাও  
→ যেখানে ডান পাশের মিল নেই  
→ সেখানে NULL থাকবে  
→ সেই NULL গুলোই আমাদের target

Structure:

S ELECT  
    A.columns  
F ROM   table_A   A  
L E F T   J O I N   table_B   B  
O N   A.key = B.key  
W H E R E   B.key   I S   N U L L ;

--------------------------------------------------

2) NOT EXISTS (Clean & Professional)

Logic:
→ প্রতিটি রো এর জন্য চেক করো  
→ অন্য টেবিলে তার কোনো মিল আছে কি না  
→ না থাকলে রো রাখো

Structure:

S ELECT  
    A.columns  
F ROM   table_A   A  
W H E R E   N O T   E X I S T S  
(  
    S ELECT   1  
    F ROM   table_B   B  
    W H E R E   A.key = B.key  
);

--------------------------------------------------

LEFT JOIN vs NOT EXISTS

LEFT JOIN:
→ beginners friendly  
→ visually easy to understand

NOT EXISTS:
→ large data তে faster  
→ production-grade logic`,
    storyScenario: `ধরো তুমি চর কুকরি-মুকরি ট্যুর পরিচালনা করছো।

paid_list  
→ যারা টাকা দিয়েছে

arrival_list  
→ যারা ঘাটে এসে পৌঁছেছে

প্রশ্ন:
“কে টাকা দিয়েছে কিন্তু এখনও আসেনি?”

INNER JOIN দিলে:
→ শুধু যারা এসেছে  
→ missing মানুষ হারিয়ে যাবে ❌

সঠিক চিন্তা: ANTI JOIN

--------------------------------------------------

Method 1: LEFT JOIN

S ELECT  
    p.tourist_name  
F ROM   paid_list   p  
L E F T   J O I N   arrival_list   a  
O N   p.tourist_id = a.tourist_id  
W H E R E   a.tourist_id   I S   N U L L ;

--------------------------------------------------

Method 2: NOT EXISTS

S ELECT  
    p.tourist_name  
F ROM   paid_list   p  
W H E R E   N O T   E X I S T S  
(  
    S ELECT   1  
    F ROM   arrival_list   a  
    W H E R E   p.tourist_id = a.tourist_id  
);

--------------------------------------------------

Common Mistakes (Critical)

• INNER JOIN ব্যবহার করে missing data খোঁজা  
• IS NULL ভুল কলামে চেক করা  
• EXISTS এর ভেতরে unnecessary SELECT * লেখা  

--------------------------------------------------

Final Takeaway

• ANTI JOIN মানে = “কে নেই?”  
• LEFT JOIN + IS NULL = simplest  
• NOT EXISTS = professional approach  
• real-world audit, mismatch, cleanup এ এটা mandatory`,
    dbFiddle: `CREATE TABLE paid_list (
    tourist_id INT PRIMARY KEY,
    tourist_name VARCHAR(50)
);

CREATE TABLE arrival_list (
    arrival_id INT PRIMARY KEY,
    tourist_id INT
);

INSERT INTO paid_list VALUES
(1,'Arif'),
(2,'Sajid'),
(3,'Baker'),
(4,'Munna');

INSERT INTO arrival_list VALUES
(101,1),
(102,3);`,
    practice: "যারা টাকা দিয়েও উপস্থিত হয়নি তাদের tourist_id বের করুন।",
    solutionSql: "SELECT p.tourist_id FROM paid_list AS p LEFT JOIN arrival_list AS a ON p.tourist_id = a.tourist_id WHERE a.tourist_id IS NULL;"
  },
  13: {
    id: 13,
    title: "Set Operators",
    coreConcept: `JOIN কাজ করে পাশাপাশিভাবে (horizontal)  
মানে কলাম বাড়ায়।

Set Operator কাজ করে উপর–নিচে (vertical)  
মানে রো বাড়ায়।

একই ধরনের ডেটা যদি আলাদা আলাদা জায়গায় থাকে,
তখন কলাম বাড়ানোর দরকার নেই,
রো একসাথে আনলেই হয়।

এই চিন্তাটাই হলো Set Thinking।`,
    conceptBreakdown: `Set Operator ব্যবহার করার জন্য কিছু কঠোর নিয়ম আছে:

• দুইটা query-তে কলামের সংখ্যা সমান হতে হবে  
• কলামের data type compatible হতে হবে  
• কলামের নাম output নেয় প্রথম query থেকে  

--------------------------------------------------

1) UNION

→ দুইটা result একসাথে আনে  
→ duplicate বাদ দেয়  

Use when:
• unique list দরকার

Structure:

S ELECT   column  
F ROM   table_1  

U N I O N  

S ELECT   column  
F ROM   table_2 ;

--------------------------------------------------

2) UNION ALL

→ দুইটা result একসাথে আনে  
→ duplicate রাখে  
→ UNION থেকে faster

Use when:
• actual count দরকার  
• duplicate meaningful

Structure:

S ELECT   column  
F ROM   table_1  

U N I O N   A L L  

S ELECT   column  
F ROM   table_2 ;

--------------------------------------------------

3) INTERSECT

→ দুই জায়গাতেই আছে এমন ডেটা  
→ common records only

Structure:

S ELECT   column  
F ROM   table_1  

I N T E R S E C T  

S ELECT   column  
F ROM   table_2 ;

--------------------------------------------------

4) EXCEPT

→ প্রথমটায় আছে  
→ কিন্তু দ্বিতীয়টায় নেই  

Structure:

S ELECT   column  
F ROM   table_1  

E X C E P T  

S ELECT   column  
F ROM   table_2 ;`,
    storyScenario: `ধরো সাগরদী খেয়াঘাটে দুইটা র‍্যাম্প আছে।

ramp_1  
→ আজ যে গাড়িগুলো উঠেছে

ramp_2  
→ অন্য পাশের সিরিয়াল

প্রশ্ন ১:
“সব গাড়ির নম্বর একসাথে চাই”
→ UNION ALL

প্রশ্ন ২:
“duplicate বাদ দিয়ে list চাই”
→ UNION

প্রশ্ন ৩:
“দুই জায়গাতেই যে গাড়ি আছে”
→ INTERSECT

প্রশ্ন ৪:
“শুধু ramp_1 এ আছে এমন গাড়ি”
→ EXCEPT

--------------------------------------------------

Example Queries

UNION ALL (সব গাড়ি):

S ELECT   vehicle_no  
F ROM   ramp_1  

U N I O N   A L L  

S ELECT   vehicle_no  
F ROM   ramp_2 ;

--------------------------------------------------

INTERSECT (common গাড়ি):

S ELECT   vehicle_no  
F ROM   ramp_1  

I N T E R S E C T  

S ELECT   vehicle_no  
F ROM   ramp_2 ;

--------------------------------------------------

EXCEPT (missing গাড়ি):

S ELECT   vehicle_no  
F ROM   ramp_1  

E X C E P T  

S ELECT   vehicle_no  
F ROM   ramp_2 ;

--------------------------------------------------

Common Mistakes (Critical)

• column count mismatch  
• data type mismatch  
• UNION দিয়ে duplicate count আশা করা  
• ORDER BY মাঝখানে ব্যবহার করা  

--------------------------------------------------

Final Takeaway

• JOIN = side by side  
• SET = up and down  
• UNION ALL fastest  
• INTERSECT / EXCEPT = comparison logic`,
    dbFiddle: `CREATE TABLE ramp_1 (
    vehicle_no VARCHAR(20),
    driver_name VARCHAR(50)
);

CREATE TABLE ramp_2 (
    vehicle_no VARCHAR(20),
    driver_name VARCHAR(50)
);

INSERT INTO ramp_1 VALUES
('BAR-123','Arif'),
('BAR-456','Kamal');

INSERT INTO ramp_2 VALUES
('BAR-123','Arif'),
('BAR-789','Sajid');`,
    practice: "ramp_1 এবং ramp_2 থেকে সব গাড়ির নম্বর বের করুন। ডুপ্লিকেট থাকলেও দেখাতে হবে।",
    solutionSql: "SELECT vehicle_no FROM ramp_1 UNION ALL SELECT vehicle_no FROM ramp_2;"
  },
  14: {
    id: 14,
    title: "String & Numeric Functions",
    coreConcept: `ডেটাবেসে ডেটা সবসময় পরিষ্কার অবস্থায় আসে না।

• নামের আগে–পরে space  
• ছোট হাত / বড় হাতের অক্ষরের গন্ডগোল  
• অপ্রয়োজনীয় দশমিক  
• ভুল করে negative সংখ্যা  

এই ডেটা দিয়ে সরাসরি রিপোর্ট বানালে
রিপোর্ট দেখতে ভুল, অসুন্দর বা বিভ্রান্তিকর হয়।

String ও Numeric Function ব্যবহার করে
ডেটা **পরিষ্কার (clean)** এবং **মানানসই (presentable)** করা হয়।`,
    conceptBreakdown: `STRING FUNCTIONS
--------------------------------------------------

1) TRIM

→ শুরু ও শেষে থাকা অপ্রয়োজনীয় space কাটে

Use when:
• user input messy
• comparison ঠিক করতে

Example:

S ELECT   T R I M ( stall_name )  
F ROM   campus_fair ;

--------------------------------------------------

2) UPPER / LOWER

→ সব অক্ষর বড় বা ছোট করে

Use when:
• consistent text দরকার
• case mismatch সমস্যা

Example:

S ELECT   U P P E R ( name )  
F ROM   users ;

--------------------------------------------------

3) CONCAT

→ একাধিক text একসাথে জোড়া দেয়

Use when:
• full name বানানো
• label তৈরি

Example:

S ELECT   C O N C A T ( first_name , ' ' , last_name )  
F ROM   users ;

--------------------------------------------------
NUMERIC FUNCTIONS
--------------------------------------------------

4) ROUND

→ দশমিক নির্দিষ্ট ঘর পর্যন্ত রাখে

Use when:
• money
• average
• invoice

Example:

S ELECT   R O U N D ( price , 2 )  
F ROM   products ;

--------------------------------------------------

5) ABS

→ negative সংখ্যাকে positive করে

Use when:
• ভুল entry correction
• calculation safety

Example:

S ELECT   A B S ( balance )  
F ROM   accounts ;`,
    storyScenario: `বি.এম কলেজ ক্যাম্পাসে মেলা বসেছে।

ডেটা এন্ট্রি করার সময় দেখা গেল—

• "  book stall  "  
• "Sweet Shop"  
• "sweet shop"  

দাম লেখা হয়েছে—

• 250.56789  
• -120 (ভুলে)

এখন রিপোর্ট বানাতে গেলে:

• একই স্টল আলাদা দেখাচ্ছে  
• টাকার অঙ্ক অদ্ভুত  
• negative value সমস্যা করছে  

তখন তুমি ব্যবহার করলে—

• TRIM → space কাটার জন্য  
• LOWER → নাম একরকম করতে  
• ROUND → টাকা ঠিক করতে  
• ABS → ভুল negative ঠিক করতে  

--------------------------------------------------

Final Example Query (Clean Report)

S ELECT  
L O W E R ( T R I M ( stall_name ) )   A S   clean_name ,  
R O U N D ( A B S ( price ) , 2 )       A S   final_price  
F ROM   campus_fair ;

--------------------------------------------------

Common Mistakes

• TRIM না করে comparison  
• UPPER / LOWER mismatch  
• ROUND ছাড়া money report  
• ABS না দিয়ে negative allow করা  

--------------------------------------------------

Final Takeaway

• Raw data ≠ usable data  
• Functions make data usable  
• Clean data = correct insight`,
    dbFiddle: `CREATE TABLE campus_fair (
  stall_id INT PRIMARY KEY,
  stall_name VARCHAR(100),
  product_price DECIMAL(10,4)
);

INSERT INTO campus_fair (stall_id, stall_name, product_price) VALUES
(1, '  pothik boi ghor  ', 250.5678),
(2, 'ART CORNER', 100.2000),
(3, ' sweet shop ', 55.4521),
(4, '  Handicrafts', 420.9999);`,
    practice: "campus_fair টেবিল থেকে সব স্টলের নাম এমনভাবে বের করুন যাতে কোনো অপ্রয়োজনীয় স্পেস না থাকে এবং সব অক্ষর ছোট হাতের হয়। একই সাথে প্রতিটি পণ্যের দাম দশমিকের পর ২ ঘর পর্যন্ত রাউন্ড করে দেখান।",
    solutionSql: "SELECT LOWER(TRIM(stall_name)) AS cleaned_name, ROUND(product_price, 2) AS price FROM campus_fair;"
  },
  15: {
    id: 15,
    title: "Date & Time Thinking",
    coreConcept: `ডেটাবেসে সময় শুধু একটি মান না —  
সময় হলো **প্রসঙ্গ (context)**।

একই ডেটা,
• দিনে দেখলে একরকম  
• মাসে দেখলে আরেকরকম  
• বছরে দেখলে সম্পূর্ণ আলাদা সিদ্ধান্ত দেয়  

Date & Time function ব্যবহার করে
আমরা সময়ের ভেতর থেকে **অর্থ (meaning)** বের করি।`,
    conceptBreakdown: `CORE DATE FUNCTIONS
--------------------------------------------------

1) YEAR / MONTH / DAY

→ একটি তারিখ ভেঙে অংশ বের করে

Use when:
• yearly report
• monthly filter
• daily tracking

Example:

S ELECT   Y E A R ( order_date )  
F ROM   orders ;

--------------------------------------------------

2) DATEDIFF

→ দুটি তারিখের মধ্যে ব্যবধান বের করে

Use when:
• age calculation
• delivery delay
• duration analysis

Example:

S ELECT   D A T E D I F F ( day , order_date , delivery_date )  
F ROM   orders ;

--------------------------------------------------

3) DATEADD

→ তারিখের সাথে দিন / মাস / বছর যোগ বা বিয়োগ

Use when:
• deadline
• expiry date
• future planning

Example:

S ELECT   D A T E A D D ( day , 7 , order_date )  
F ROM   orders ;

--------------------------------------------------

4) GETDATE

→ বর্তমান তারিখ ও সময়

Use when:
• current comparison
• real-time logic

Example:

S ELECT   G E T D A T E ( ) ;`,
    storyScenario: `সন্ধ্যা নদীর পাড়ে প্রতিদিন পানির উচ্চতা মাপা হচ্ছে।

ডেটা আছে—

• record_date  
• water_level  

কর্তৃপক্ষ প্রশ্ন করল—

• কোন মাসে পানি বেশি ছিল  
• গত বছরের তুলনায় এবছর কী অবস্থা  
• আজ থেকে কতদিন আগে সর্বোচ্চ লেভেল রেকর্ড হয়েছে  

তুমি তখন—

• YEAR দিয়ে বছর আলাদা করলে  
• MONTH দিয়ে মাস বের করলে  
• DATEDIFF দিয়ে আজ থেকে কতদিন আগে তা হিসাব করলে  

সময়কে ভেঙে দেখার কারণেই
ডেটা থেকে বাস্তব সিদ্ধান্ত নেওয়া সম্ভব হলো।

--------------------------------------------------

Final Example Query (Time-Based Insight)

S ELECT  
Y E A R ( record_date )    A S   record_year ,  
M O N T H ( record_date )  A S   record_month ,  
D A T E D I F F ( day , record_date , G E T D A T E ( ) )  
A S   days_ago  
F ROM   river_stats ;

--------------------------------------------------

Common Mistakes

• Date কে text হিসেবে রাখা  
• YEAR(order_date) দিয়ে WHERE filter  
• Time logic না বুঝে comparison  
• DATEDIFF order উল্টো দেওয়া  

--------------------------------------------------

Final Takeaway

• Time changes meaning of data  
• Date functions = decision power  
• Wrong date logic = wrong insight`,
    dbFiddle: `CREATE TABLE river_stats (
  measurement_id INT PRIMARY KEY,
  record_date DATE,
  water_level DECIMAL(5,2)
);

INSERT INTO river_stats (measurement_id, record_date, water_level) VALUES
(1, '2024-01-15', 3.5),
(2, '2024-02-20', 4.2),
(3, '2024-12-31', 5.1),
(4, '2025-01-01', 3.8);`,
    practice: "river_stats টেবিল থেকে শুধুমাত্র ২০২৪ সালের রেকর্ডগুলো বের করুন এবং আউটপুটে বছরটি একটি আলাদা কলামে দেখান যার নাম হবে record_year।",
    solutionSql: "SELECT *, YEAR(record_date) AS record_year FROM river_stats WHERE YEAR(record_date) = 2024;"
  },
  16: {
    id: 16,
    title: "Handling NULL Values",
    coreConcept: `NULL মানে শূন্য না।  
NULL মানে খালি স্ট্রিংও না।  

NULL মানে —
👉 ডেটা **নেই**  
👉 ডেটা **অজানা**  
👉 ডেটা **এখনো আসেনি**

SQL যখন NULL দেখে,
সে ধরে নেয় “আমি জানি না”  
আর “আমি জানি না” দিয়ে কোনো গাণিতিক বা লজিক্যাল সিদ্ধান্ত নেওয়া যায় না।`,
    conceptBreakdown: `WHAT NULL IS (AND IS NOT)
--------------------------------------------------

• NULL ≠ 0  
• NULL ≠ ''  
• NULL ≠ FALSE  

NULL এর সাথে কোনো comparison
True বা False হয় না — Result হয় UNKNOWN

--------------------------------------------------

1) IS NULL

→ NULL চেক করার একমাত্র সঠিক উপায়

Use when:
• missing data খুঁজতে
• incomplete records ধরতে

Example:

S ELECT   *  
F ROM   users  
W H E R E   email   I S   N U L L ;

--------------------------------------------------

2) IS NOT NULL

→ যেখানে ডেটা আছে তা নিশ্চিত করতে

Use when:
• clean report
• valid records

Example:

S ELECT   name , email  
F ROM   users  
W H E R E   email   I S   N O T   N U L L ;

--------------------------------------------------

3) ISNULL / COALESCE

→ NULL হলে default মান বসায়

Use when:
• calculation করতে হবে
• display clean রাখতে হবে

Example:

S ELECT  
C O A L E S C E ( rice_bags , 0 )  
F ROM   boat_inventory ;

--------------------------------------------------

4) NULLIF

→ দুটি মান সমান হলে NULL বানায়

Use when:
• divide by zero error এড়াতে
• conditional NULL তৈরি করতে

Example:

S ELECT  
total_sales / N U L L I F ( quantity , 0 )  
F ROM   sales ;`,
    storyScenario: `সুগন্ধা নদীর পাড়ে চালবোঝাই নৌকার হিসাব রাখা হচ্ছে।

টেবিলে আছে—

• boat_name  
• rice_bags  

কিন্তু কিছু নৌকার—
• নাম লেখা নেই  
• বস্তার সংখ্যা লেখা নেই  

তুমি যখন মোট চাল হিসাব করতে গেলে দেখলে—

100 + NULL = NULL  

একটা নৌকার তথ্য না থাকায়
পুরো এলাকার হিসাব ভেঙে যাচ্ছে।

তখন তুমি সিদ্ধান্ত নিলে—

• যেখানে rice_bags নেই → 0 ধরবে  
• যেখানে boat_name নেই → “Unknown” দেখাবে  

এই NULL হ্যান্ডলিং না করলে
ডেটা থাকা সত্ত্বেও
কোনো সিদ্ধান্ত নেওয়া যেত না।

--------------------------------------------------

Final Example Query (Safe NULL Handling)

S ELECT  
C O A L E S C E ( boat_name , 'Unknown' )   A S   boat_name ,  
I S N U L L ( rice_bags , 0 )              A S   rice_bags  
F ROM   boat_inventory ;

--------------------------------------------------

Common Mistakes

• column = NULL লেখা  
• NULL কে 0 ভাবা  
• calculation এর আগে NULL handle না করা  
• COUNT(column) vs COUNT(*) না বোঝা  

--------------------------------------------------

Final Takeaway

• NULL মানে missing knowledge  
• NULL ignore করলে logic ভাঙে  
• Professional SQL = NULL-safe SQL`,
    dbFiddle: `CREATE TABLE boat_inventory (
  boat_id INT PRIMARY KEY,
  boat_name VARCHAR(50),
  rice_bags INT
);

INSERT INTO boat_inventory (boat_id, boat_name, rice_bags) VALUES
(1, 'Sonar Tori', 50),
(2, NULL, 30),
(3, 'Ruposhi', NULL),
(4, 'Meghna', 100);`,
    practice: "boat_inventory টেবিল থেকে নৌকার নাম এবং চালের বস্তার সংখ্যা বের করুন। যদি নৌকার নাম NULL হয়, তাহলে সেখানে 'Unknown' দেখাতে হবে।",
    solutionSql: "SELECT COALESCE(boat_name, 'Unknown') AS boat_name, rice_bags FROM boat_inventory;"
  },
  17: {
    id: 17,
    title: "Conditional Logic — CASE",
    coreConcept: `CASE হলো SQL-এর ভেতরের সিদ্ধান্ত নেওয়ার মস্তিষ্ক।

বাস্তব জীবনে যেমন বলো—
• যদি বয়স ≥ ১৮ → Adult  
• নাহলে → Minor  

ঠিক তেমনি SQL-এ CASE বলে—
👉 “এই শর্ত হলে এটা দাও, না হলে ওটা দাও”

CASE নতুন ডেটা তৈরি করে না,
বিদ্যমান ডেটার উপর **লজিক বসিয়ে অর্থ তৈরি করে**।`,
    conceptBreakdown: `BASIC CASE STRUCTURE
--------------------------------------------------

C A S E  
W H E N   condition   T H E N   result  
W H E N   condition   T H E N   result  
E L S E   default  
E N D

--------------------------------------------------

1) Simple CASE (Value based)

Use when:
• একটি কলামের মান দেখে সিদ্ধান্ত নিতে হবে

Example:

S ELECT  
name ,  
C A S E   status  
W H E N   'A'   T H E N   'Active'  
W H E N   'I'   T H E N   'Inactive'  
E L S E   'Unknown'  
E N D   A S   user_status  
F ROM   users ;

--------------------------------------------------

2) Searched CASE (Condition based)

Use when:
• comparison দরকার
• range বা multiple logic দরকার

Example:

S ELECT  
student_name ,  
C A S E  
W H E N   marks   >=   80   T H E N   'A'  
W H E N   marks   >=   60   T H E N   'B'  
W H E N   marks   >=   40   T H E N   'C'  
E L S E   'Fail'  
E N D   A S   grade  
F ROM   exam_results ;

--------------------------------------------------

3) CASE with NULL Handling

Use when:
• missing data meaningful করতে হবে

Example:

S ELECT  
C A S E  
W H E N   email   I S   N U L L   T H E N   'No Email'  
E L S E   email  
E N D   A S   contact  
F ROM   users ;

--------------------------------------------------

Important Rules

• CASE always ends with E N D  
• THEN ও ELSE একই datatype হতে হবে  
• CASE execution top → bottom  
• প্রথম TRUE condition এই থেমে যায়`,
    storyScenario: `লাকুটিয়া নদীপাড়ে বিকেলে মানুষের ভিড়।

তুমি একটা টেবিল বানালে—
• person_name  
• group_size  

তোমার নিয়ম—

• group_size ≥ 5 → Group  
• group_size = 2 → Couple  
• group_size = 1 → Individual  

এই ক্যাটাগরি ডাটাবেসে নেই,
তুমি এটা **logic দিয়ে তৈরি করবে**।

CASE ছাড়া করলে—
• আলাদা টেবিল
• বা manual calculation লাগতো

CASE ব্যবহার করে
এক লাইনে সিদ্ধান্ত তৈরি করা গেল।

--------------------------------------------------

Final Example Query (Complete CASE Logic)

S ELECT  
person_name ,  
C A S E  
W H E N   group_size   >=   5   T H E N   'Group'  
W H E N   group_size   =    2   T H E N   'Couple'  
W H E N   group_size   =    1   T H E N   'Individual'  
E L S E   'Unknown'  
E N D   A S   group_type  
F ROM   river_gathering ;

--------------------------------------------------

Common Mistakes

• END না লেখা  
• THEN এ number, ELSE এ text  
• condition order ভুল  
• CASE কে WHERE এর বদলে ব্যবহার করা  

--------------------------------------------------

Final Takeaway

• CASE = SQL decision engine  
• CASE report readable করে  
• CASE ছাড়া professional report অসম্পূর্ণ`,
    dbFiddle: `CREATE TABLE river_gathering (
    person_id INT PRIMARY KEY,
    person_name VARCHAR(50),
    equipment VARCHAR(50),
    group_size INT
);

INSERT INTO river_gathering VALUES
(1, 'Abir', 'Fishing Rod', 1),
(2, 'Sajid', 'Camera', 2),
(3, 'Mina', NULL, 5),
(4, 'Rahim', 'Fishing Rod', 3),
(5, 'Anika', NULL, 1);`,
    practice: "group_size অনুযায়ী একটি নতুন কলাম group_type তৈরি করুন— ৫ বা তার বেশি → Group, ২ → Couple, ১ → Individual",
    solutionSql: "SELECT *, CASE WHEN group_size >= 5 THEN 'Group' WHEN group_size = 2 THEN 'Couple' ELSE 'Individual' END AS group_type FROM river_gathering;"
  },
  18: {
    id: 18,
    title: "Subqueries",
    coreConcept: `Subquery মানে হলো “একটা প্রশ্নের ভেতরে আরেকটা প্রশ্ন”।  
যখন কোনো তথ্য বের করার জন্য আগে অন্য কোনো হিসাব বা ফল জানা দরকার হয়, তখন SQL একা এক ধাপে কাজ করতে পারে না।  
তখন SQL প্রথমে ভেতরের প্রশ্নটা সমাধান করে, তার ফলাফল নিয়ে বাইরের প্রশ্নটা চালায়।

সহজভাবে বললে  
→ আগে ছোট হিসাব  
→ তারপর সেই হিসাব ব্যবহার করে বড় সিদ্ধান্ত  

এই চিন্তাটাই Subquery।`,
    conceptBreakdown: `**Subquery কীভাবে কাজ করে**

- Subquery সবসময় প্রথমে রান হয়  
- এর ফলাফল বাইরের কুয়েরিতে ইনপুট হিসেবে ব্যবহৃত হয়  
- এটি WHERE, SELECT অথবা FROM — যেকোনো জায়গায় থাকতে পারে

**সবচেয়ে কমন ব্যবহার**

1) Average / Max / Min এর সাথে তুলনা  
2) “কারা গড়ের চেয়ে বেশি / কম” টাইপ প্রশ্ন  
3) অন্য টেবিলের উপর ভিত্তি করে ফিল্টার করা

**Basic Structure**

ভেতরের প্রশ্ন:
- একটি মান বের করে (যেমন AVG, MAX)

বাইরের প্রশ্ন:
- সেই মানের সাথে তুলনা করে রো ফিল্টার করে

**Example SQL (ভাঙা-ফরম্যাট, নিরাপদ)**

S ELECT  
p r o d u c t _ n a m e , p r i c e  
F R O M   p r o d u c t s  
W H E R E   p r i c e   >  
(  
S ELECT   A V G ( p r i c e )  
F R O M   p r o d u c t s  
) ;

**Common Mistakes**

- Subquery একাধিক রো রিটার্ন করলে \`>\` বা \`<\` কাজ করবে না  
- Subquery আগে আলাদা করে চিন্তা না করলে লজিক গুলিয়ে যায়  
- অপ্রয়োজনে Subquery লিখলে কোয়েরি ধীর হয়ে যায়`,
    storyScenario: `যুবরাজ বরিশাল শহরের একটি বড় বইয়ের দোকানের সেলস ডেটা নিয়ে কাজ করছে।  
তার কাছে একটি \`books\` টেবিল আছে যেখানে বইয়ের নাম এবং দাম রাখা আছে।

একদিন দোকানের মালিক যুবরাজকে বললেন—

“যুবরাজ, এমন সব বইয়ের নাম বের করো  
যেগুলোর দাম দোকানের গড় বইয়ের দামের চেয়ে বেশি।”

সমস্যাটা শুনে যুবরাজ বুঝলো—  
সে যদি সরাসরি দাম তুলনা করে, তাহলে আগে তো তাকে **গড় দাম** জানতে হবে।

যুবরাজ জানে—
- ভেতরের কুয়েরি আগে গড় দাম বের করবে  
- বাইরের কুয়েরি সেই গড় দামের সাথে প্রতিটি বইয়ের দাম তুলনা করবে  

তাই যুবরাজ প্রথমে নিজেকে প্রশ্ন করলো—  
“আমি যদি আলাদা করে গড় দাম বের করি, সেটাকে কি আবার ব্যবহার করা যাবে?”  

তারপর সে Subquery ব্যবহার করে সম্পূর্ণ সমাধানটা লিখলো এভাবে:

S ELECT  
b o o k _ n a m e , p r i c e  
F R O M   b o o k s  
W H E R E   p r i c e   >  
(  
S ELECT   A V G ( p r i c e )  
F R O M   b o o k s  
) ;

এই কোয়েরিতে কী হলো—

- ভেতরের কুয়েরি (\`A V G ( p r i c e )\`) আগে রান হয়ে দোকানের গড় বইয়ের দাম বের করলো  
- সেই গড় দাম একটি সংখ্যায় পরিণত হলো  
- বাইরের কুয়েরি প্রতিটি বইয়ের দাম সেই সংখ্যার সাথে তুলনা করলো  
- যেসব বইয়ের দাম গড়ের চেয়ে বেশি, শুধু সেগুলোই আউটপুটে এলো  

এভাবে যুবরাজ বুঝে গেল—  
**Subquery মানে কোনো ম্যাজিক না, বরং ধাপে ধাপে চিন্তা করে সমস্যা ভাঙা।**`,
    dbFiddle: `CREATE TABLE mosque_visits (
    visit_id INT PRIMARY KEY,
    visitor_name VARCHAR(50),
    entry_hour INT
);

INSERT INTO mosque_visits VALUES
(1, 'Karim', 10),
(2, 'Rahim', 12),
(3, 'Sultana', 9),
(4, 'Abir', 15),
(5, 'Mina', 11);`,
    practice: "গড় প্রবেশ সময়ের চেয়ে আগে যারা মসজিদে প্রবেশ করেছে, তাদের নাম বের করুন।",
    solutionSql: "SELECT visitor_name FROM mosque_visits WHERE entry_hour < (SELECT AVG(entry_hour) FROM mosque_visits);"
  },
  19: {
    id: 19,
    title: "Common Table Expressions (CTE)",
    coreConcept: `CTE হলো একটি অস্থায়ী নাম দেওয়া রেজাল্ট সেট,  
যেটা আগে তৈরি হয়  
এবং পরে মূল Query-তে ধাপে ধাপে ব্যবহার করা যায়।

এটা এমনভাবে ভাবা যায়—
আগে সমস্যা ভেঙে ছোট টেবিল বানানো,
তারপর সেই টেবিল দিয়ে আসল সিদ্ধান্ত নেওয়া।

CTE কোডকে পড়ার যোগ্য করে,
জটিল Subquery-এর বদলে পরিষ্কার চিন্তা দেখায়।`,
    conceptBreakdown: `CTE সবসময় W I T H দিয়ে শুরু হয়।

স্ট্রাকচার:

W I T H   t e m p _ t a b l e   A S  
(  
S ELECT   c o l u m n s  
F R O M   t a b l e  
)  
S ELECT   *  
F R O M   t e m p _ t a b l e ;

গুরুত্বপূর্ণ নিয়ম—

- CTE আগে রান হয়, তারপর মূল Query
- Query শেষ হলেই CTE নিজে নিজে মুছে যায়
- CTE-এর ভিতরে O R D E R   B Y ব্যবহার করা যায় না
- একই CTE এক Query-তে একাধিকবার ব্যবহার করা যায়

CTE ব্যবহার করা হয় যখন—
- একাধিক ধাপে হিসাব দরকার
- Subquery পড়তে জটিল হয়ে যাচ্ছে
- Intermediate result পরিষ্কারভাবে দেখতে চাই`,
    storyScenario: `যুবরাজ একটি অনলাইন বইয়ের দোকানের ডেটা নিয়ে কাজ করছে।
তার কাজ হলো—

১) আগে প্রতিটি ক্যাটাগরির মোট বিক্রি বের করা  
২) তারপর শুধু সেই ক্যাটাগরিগুলো দেখানো  
   যাদের মোট বিক্রি ১০,০০০ টাকার বেশি  

যুবরাজ বুঝে গেল—
এটা এক লাইনের Query না,
এটা দুই ধাপের চিন্তা।

প্রথম ধাপ: ক্যাটাগরি অনুযায়ী মোট বিক্রি  
দ্বিতীয় ধাপ: সেই ফলাফল থেকে ফিল্টার  

তাই সে Subquery না লিখে CTE ব্যবহার করলো।

যুবরাজের লেখা Query:

W I T H   c a t e g o r y _ s a l e s   A S  
(  
S ELECT  
c a t e g o r y ,  
S U M ( p r i c e )   A S   t o t a l _ s a l e s  
F R O M   b o o k _ s a l e s  
G R O U P   B Y   c a t e g o r y  
)  
S ELECT  
c a t e g o r y , t o t a l _ s a l e s  
F R O M   c a t e g o r y _ s a l e s  
W H E R E   t o t a l _ s a l e s   >   1 0 0 0 0 ;

এইখানে কী হলো—

- যুবরাজ আগে CTE দিয়ে intermediate হিসাব বানালো
- তারপর সেই পরিষ্কার ফলাফলের উপর সিদ্ধান্ত নিলো
- কোড পড়তে সহজ
- লজিক স্পষ্ট
- Debug করা সহজ

যুবরাজ বুঝে গেল—
**CTE মানে হলো আগে ভাবা, পরে নির্বাচন করা।**`,
    dbFiddle: `CREATE TABLE launch_trips (
    trip_id INT PRIMARY KEY,
    launch_name VARCHAR(50),
    ticket_price DECIMAL(10,2),
    passenger_count INT
);

INSERT INTO launch_trips VALUES
(1, 'MV Sunderban', 1200, 50),
(2, 'Green Line', 2500, 30),
(3, 'MV Sunderban', 1200, 40),
(4, 'Kirtankhola', 1000, 60),
(5, 'Green Line', 2500, 20);`,
    practice: "একটি CTE ব্যবহার করে প্রতিটি লঞ্চের মোট আয় বের করুন (total = ticket_price × passenger_count এর যোগফল)। এরপর শুধুমাত্র সেই লঞ্চগুলোর নাম দেখান যাদের মোট আয় ১০,০০০ টাকার বেশি।",
    solutionSql: "WITH LaunchRevenue AS (SELECT launch_name, SUM(ticket_price * passenger_count) AS total_revenue FROM launch_trips GROUP BY launch_name) SELECT launch_name FROM LaunchRevenue WHERE total_revenue > 10000;"
  },
  20: {
    id: 20,
    title: "Window Functions — Ranking",
    coreConcept: `Window Function মানে হলো—
ডেটা বিশ্লেষণ করা
কিন্তু ডেটা ছোট করে না ফেলা।

G R O U P   B Y ব্যবহার করলে
রো গুলো একত্র হয়ে যায়।

কিন্তু Window Function ব্যবহার করলে
প্রতিটি রো আগের মতোই থাকে,
শুধু তার পাশে নতুন বিশ্লেষণ যুক্ত হয়।

Ranking Function আমাদের বলে দেয়—
এই রো টা অন্য রো গুলোর তুলনায় কোথায় দাঁড়িয়ে আছে।`,
    conceptBreakdown: `Ranking এর জন্য মূল ফাংশনগুলো—

- R O W _ N U M B E R ( )
  → প্রতিটি রো কে ইউনিক নম্বর দেয়
  → টাই থাকলেও নম্বর আলাদা হবে

- R A N K ( )
  → টাই হলে একই র্যাঙ্ক দেয়
  → কিন্তু পরের নম্বর স্কিপ করে

- D E N S E _ R A N K ( )
  → টাই হলে একই র্যাঙ্ক দেয়
  → কোনো নম্বর স্কিপ করে না

সব Window Function এ এই অংশ বাধ্যতামূলক—

O V E R  
(  
P A R T I T I O N   B Y   c o l u m n   (optional)  
O R D E R   B Y   c o l u m n  
)

গুরুত্বপূর্ণ নিয়ম—

- O R D E R   B Y না দিলে Ranking কাজ করবে না
- W H E R E এর ভিতরে Window Function লেখা যায় না
- ফিল্টার দরকার হলে Subquery বা CTE লাগবে`,
    storyScenario: `যুবরাজ একটি পার্ক ম্যানেজমেন্ট সিস্টেমে কাজ করছে।
পার্কে প্রতিদিন অনেক মানুষ আসে,
এবং প্রত্যেকে কত সময় পার্কে কাটিয়েছে
তা ডাটাবেসে সেভ করা থাকে।

ম্যানেজার যুবরাজকে বললো—

“আমি চাই প্রতিটি ভিজিটরের নামের পাশে  
তারা কত সময় কাটিয়েছে তার ভিত্তিতে  
একটা র্যাঙ্ক দেখতে।”

যুবরাজ জানে—
এখানে G R O U P   B Y ব্যবহার করলে
মানুষের নাম হারিয়ে যাবে।

তাই সে Window Function ব্যবহার করলো।

যুবরাজের চিন্তা—

- প্রতিটি রো থাকবে
- সময় অনুযায়ী র্যাঙ্ক বসবে
- টাই হলে একই র্যাঙ্ক হবে
- নম্বর স্কিপ করা যাবে না

সে লিখলো—

S ELECT  
v i s i t o r _ n a m e ,  
d u r a t i o n _ m i n u t e s ,  
D E N S E _ R A N K ( )  
O V E R  
(  
O R D E R   B Y   d u r a t i o n _ m i n u t e s   D E S C  
)   A S   v i s i t o r _ r a n k  
F R O M   p a r k _ v i s i t s ;

এখানে কী হলো—

- কোনো রো বাদ গেল না
- প্রতিটি ভিজিটরের পাশে র্যাঙ্ক বসলো
- বেশি সময় = ভালো র্যাঙ্ক
- টাই হলে একই র্যাঙ্ক, কিন্তু গ্যাপ নেই

যুবরাজ বুঝে গেল—

**Window Ranking মানে হলো  
ডেটা না ভেঙে ডেটার ভেতরের অবস্থান বোঝা।**`,
    dbFiddle: `CREATE TABLE park_visits (
    visit_id INT PRIMARY KEY,
    visitor_name VARCHAR(50),
    duration_minutes INT,
    visitor_type VARCHAR(20)
);

INSERT INTO park_visits VALUES
(1, 'Abid', 45, 'Local'),
(2, 'Sultana', 120, 'Tourist'),
(3, 'Kamal', 45, 'Local'),
(4, 'Rahim', 90, 'Local'),
(5, 'Mina', 150, 'Tourist');`,
    practice: "duration_minutes এর ওপর ভিত্তি করে দর্শনার্থীদের DENSE_RANK বের করুন।",
    solutionSql: "SELECT visitor_name, duration_minutes, DENSE_RANK() OVER (ORDER BY duration_minutes DESC) AS visit_rank FROM park_visits;"
  },
  21: {
    id: 21,
    title: "Window Analytics",
    coreConcept: `Window Analytics মানে হলো—
বর্তমান রোতে দাঁড়িয়ে
আগের বা পরের রো-এর ডেটা দেখা।

এটা মানুষের চিন্তার মতো—

আজ যা ঘটেছে
তা কালকের সাথে তুলনা করা
অথবা আগামিকাল কী হবে সেটা অনুমান করা।

এই ধরনের তুলনা
G R O U P   B Y দিয়ে করা যায় না,
কারণ সেখানে রো ভেঙে যায়।

Window Analytics রো রেখে দেয়,
কিন্তু সময়ের ধারাবাহিকতা যোগ করে।`,
    conceptBreakdown: `এই মডিউলের মূল ফাংশন—

- L A G ( c o l u m n )
  → আগের রো-এর মান দেখায়
  → “আগে কী ছিল?” বোঝার জন্য

- L E A D ( c o l u m n )
  → পরের রো-এর মান দেখায়
  → “এর পরে কী আসবে?” বোঝার জন্য

- R U N N I N G   T O T A L
  → সময়ের সাথে সাথে যোগফল
  → মোট কত হয়েছে এখন পর্যন্ত

সব ক্ষেত্রেই দরকার—

O V E R  
(  
O R D E R   B Y   c o l u m n  
)

গুরুত্বপূর্ণ নিয়ম—

- O R D E R   B Y ছাড়া আগের / পরের রো বোঝা যাবে না
- প্রথম রো-এর L A G সবসময় N U L L হবে
- Window Analytics সরাসরি W H E R E এ লেখা যায় না`,
    storyScenario: `যুবরাজ একটি লঞ্চ টার্মিনালের ডেটা সিস্টেম দেখাশোনা করছে।
প্রতিটি লঞ্চ কখন এসেছে
এবং কতজন যাত্রী এনেছে
তা ডাটাবেসে সেভ আছে।

ম্যানেজার যুবরাজকে বললো—

“প্রতিটি লঞ্চ আসার সময়ের পাশে  
তার আগের লঞ্চটি কতজন যাত্রী এনেছিল  
সেটাও দেখতে চাই।”

যুবরাজ বুঝে গেল—
এখানে তাকে **আগের রো** দেখতে হবে।

সে L A G ব্যবহার করলো।

S ELECT  
l a u n c h _ n a m e ,  
a r r i v a l _ t i m e ,  
p a s s e n g e r s ,  
L A G ( p a s s e n g e r s )  
O V E R  
(  
O R D E R   B Y   a r r i v a l _ t i m e  
)   A S   p r e v i o u s _ p a s s e n g e r s  
F R O M   l a u n c h _ l o g s ;

এখানে কী হলো—

- প্রথম লঞ্চের আগে কেউ নেই → N U L L
- প্রতিটি লঞ্চ জানলো তার আগের অবস্থা
- তুলনা করা সহজ হয়ে গেল

এরপর ম্যানেজার আবার বললো—

“সময় অনুযায়ী এখন পর্যন্ত  
মোট কতজন যাত্রী এসেছে সেটাও চাই।”

যুবরাজ Running Total লিখলো—

S ELECT  
a r r i v a l _ t i m e ,  
p a s s e n g e r s ,  
S U M ( p a s s e n g e r s )  
O V E R  
(  
O R D E R   B Y   a r r i v a l _ t i m e  
)   A S   t o t a l _ r u n n i n g _ p a s s e n g e r s  
F R O M   l a u n c h _ l o g s ;

এখন যুবরাজ স্পষ্ট দেখতে পাচ্ছে—

- এই মুহূর্ত পর্যন্ত মোট যাত্রী কত
- আগের সময়ের সাথে বর্তমান সময়ের পার্থক্য
- ট্রেন্ড বাড়ছে নাকি কমছে

যুবরাজ বুঝে গেল—

**Window Analytics মানে হলো  
সময় ধরে ডেটার গল্প পড়া।**`,
    dbFiddle: `CREATE TABLE launch_logs (
    log_id INT PRIMARY KEY,
    launch_name VARCHAR(50),
    arrival_time TIME,
    passengers INT
);

INSERT INTO launch_logs VALUES
(1, 'Sunderban 10', '06:00:00', 500),
(2, 'Surovi 7', '06:30:00', 400),
(3, 'Kirtankhola 2', '07:15:00', 600),
(4, 'Green Line', '08:00:00', 300);`,
    practice: "passengers কলামের ওপর ভিত্তি করে সময় অনুযায়ী Running Total বের করুন।",
    solutionSql: "SELECT launch_name, arrival_time, passengers, SUM(passengers) OVER (ORDER BY arrival_time) AS running_total FROM launch_logs;"
  },
  22: {
    id: 22,
    title: "Views & Stored Procedures (Awareness)",
    coreConcept: `ডাটাবেসে কিছু কাজ আছে
যেগুলো বারবার একইভাবে করতে হয়।

প্রতিবার যদি একই
লম্বা S E L E C T
জয়েন
ফিল্টার
লজিক লিখতে হয়,
তাহলে কাজ ধীর হয়
এবং ভুলের সম্ভাবনা বাড়ে।

এই সমস্যা সমাধানের জন্য—

- V I E W → বারবার পড়ার জন্য প্রস্তুত করা ফলাফল
- S T O R E D   P R O C E D U R E → ধাপে ধাপে চালানো কাজের রেসিপি

এগুলো মূলত
**Reuse করার চিন্তা**।`,
    conceptBreakdown: `V I E W :

- এটি আসল ডেটা কপি করে না
- এটি একটি সেভ করা কুয়েরি
- ব্যবহার করলে মনে হয় টেবিল
- সবসময় লেটেস্ট ডেটা দেখায়

S T O R E D   P R O C E D U R E :

- একাধিক S Q L স্টেপ একসাথে রাখে
- ইনপুট নিতে পারে
- I N S E R T / U P D A T E / S E L E C T একসাথে করতে পারে
- বিজনেস লজিক লুকিয়ে রাখতে সাহায্য করে

গুরুত্বপূর্ণ পার্থক্য—

- V I E W → শুধু পড়া
- P R O C E D U R E → কাজ করা`,
    storyScenario: `যুবরাজ একটি লঞ্চ টার্মিনালের রিপোর্টিং সিস্টেম দেখছে।
প্রতিদিন ম্যানেজমেন্ট একই প্রশ্ন করে—

“আজ কোন কোন লঞ্চে  
১০০ জনের বেশি যাত্রী এসেছে?”

যুবরাজ দেখলো—
এই রিপোর্টের জন্য
প্রতিদিন একই কুয়েরি লিখতে হচ্ছে।

সে সিদ্ধান্ত নিল—
এই কুয়েরিটা একবার লিখে
নাম দিয়ে রেখে দেবে।

সে একটি V I E W বানালো।

C R E A T E   V I E W  
h i g h _ p a s s e n g e r _ l a u n c h e s  
A S  
S ELECT  
l a u n c h _ n a m e ,  
p a s s e n g e r s  
F R O M   l a u n c h _ l o g s  
W H E R E   p a s s e n g e r s   >   1 0 0 ;

এখন ম্যানেজার শুধু বলে—

S ELECT   *  
F R O M   h i g h _ p a s s e n g e r _ l a u n c h e s ;

কুয়েরি ছোট
ভুল কম
কাজ দ্রুত।

এরপর যুবরাজ আরেকটা সমস্যা দেখে।
টিকিট বিক্রির সময়—

- টিকিট ঢুকবে
- যাত্রীর সংখ্যা আপডেট হবে
- একটি লগ এন্ট্রি হবে

এই পুরো কাজটা
প্রতিবার আলাদা আলাদা লিখলে ঝামেলা।

তাই সে ভাবলো—
এটা একটা P R O C E D U R E হওয়া উচিত।

মানে—
একবার ডাকলেই
সব কাজ হবে।

যুবরাজ বুঝে গেল—

V I E W = প্রস্তুত রিপোর্ট  
P R O C E D U R E = কাজ করার মেশিন

এগুলো জানাই যথেষ্ট।
সব জায়গায় ব্যবহার করা বাধ্যতামূলক নয়।
কিন্তু বড় সিস্টেমে
এগুলো ছাড়া পেশাদার কাজ অসম্ভব।`,
    dbFiddle: `CREATE TABLE ticket_sales (
    ticket_id INT PRIMARY KEY,
    passenger_name VARCHAR(50),
    amount DECIMAL(10,2)
);

INSERT INTO ticket_sales VALUES
(1, 'Karim', 1200),
(2, 'Rahim', 1500),
(3, 'Sajid', 800);`,
    practice: "ticket_sales টেবিল থেকে ১০০০ টাকার বেশি টিকিট দেখানোর একটি View তৈরি করুন।",
    solutionSql: "CREATE VIEW expensive_tickets AS SELECT passenger_name, amount FROM ticket_sales WHERE amount > 1000;"
  },
  23: {
    id: 23,
    title: "Performance Thinking (Awareness)",
    coreConcept: `ডাটাবেসে ডেটা যত বাড়ে,
কুয়েরি তত ধীর হওয়ার ঝুঁকি বাড়ে।

সব S E L E C T ঠিকভাবে লিখলেই
ডাটাবেস দ্রুত কাজ করবে—
এমনটা নয়।

P E R F O R M A N C E মানে হলো—
ডাটাবেসকে কম পরিশ্রম করানো
এবং কম সময়ে সঠিক ডেটা বের করা।

এখানে মূল চিন্তা তিনটা—

- কোথা থেকে খুঁজবে
- কতটা ডেটা স্ক্যান করবে
- কীভাবে দ্রুত পৌঁছাবে`,
    conceptBreakdown: `I N D E X :

- বইয়ের সূচিপত্রের মতো
- ডেটার শর্টকাট পথ
- না থাকলে পুরো টেবিল পড়তে হয়

S C A N :

- পুরো টেবিল একে একে দেখা
- বড় ডেটায় খুব ধীর

S E E K :

- ইনডেক্স ব্যবহার করে সরাসরি খোঁজা
- সবচেয়ে দ্রুত উপায়

E X E C U T I O N   P L A N :

- SQL নিজে যেভাবে কাজ করার পরিকল্পনা বানায়
- এখানেই বোঝা যায় কেন কুয়েরি ধীর

সবচেয়ে বড় ভুল—

- অকারণে সব কলামে ইনডেক্স
- W H E R E এ ফাংশন ব্যবহার
- L I K E '%text' ব্যবহার`,
    storyScenario: `যুবরাজ একটি বড় পার্কের ভিজিটর ডেটা দেখছে।
টেবিলে লক্ষ লক্ষ রেকর্ড।

ম্যানেজার হঠাৎ জিজ্ঞেস করল—

“Arif Hasan নামের ভিজিটর
কখন পার্কে ঢুকেছিল?”

যুবরাজ প্রথমে সাধারণভাবে ভাবলো—

S ELECT  
*  
F R O M   p a r k _ v i s i t o r s  
W H E R E   v i s i t o r _ n a m e   =   'Arif Hasan' ;

কিন্তু সে বুঝলো—
এই কুয়েরি চালাতে গেলে
ডাটাবেস পুরো টেবিল স্ক্যান করবে।

কারণ—
v i s i t o r _ n a m e কলামে
কোনো I N D E X নেই।

তখন যুবরাজ সিদ্ধান্ত নিল—
এই কলামে ইনডেক্স দরকার।

C R E A T E   I N D E X  
i d x _ v i s i t o r _ n a m e  
O N   p a r k _ v i s i t o r s ( v i s i t o r _ n a m e ) ;

এখন একই কুয়েরি চালালে—

- পুরো টেবিল পড়তে হচ্ছে না
- সরাসরি নামের জায়গায় পৌঁছাচ্ছে
- রেজাল্ট প্রায় সাথে সাথে আসছে

এরপর যুবরাজ আরেকটা ভুল ধরলো।
কেউ লিখেছে—

W H E R E   Y E A R ( e n t r y _ t i m e )   =   2 0 2 5

সে জানে—
এভাবে লিখলে ইনডেক্স কাজ করবে না।

সঠিক চিন্তা হলো—

W H E R E   e n t r y _ t i m e  
B E T W E E N  
'2 0 2 5 - 0 1 - 0 1'  
A N D  
'2 0 2 5 - 1 2 - 3 1'

যুবরাজ বুঝে গেল—

ভুল কুয়েরি মানে
ডাটাবেসকে অযথা কষ্ট দেওয়া।

পারফরম্যান্স চিন্তা মানে—
কম কাজ
কম স্ক্যান
দ্রুত ফলাফল।`,
    dbFiddle: `CREATE TABLE park_visitors (
    visitor_id INT PRIMARY KEY,
    visitor_name VARCHAR(50),
    entry_time DATETIME,
    visitor_type VARCHAR(20)
);

INSERT INTO park_visitors VALUES
(1, 'Arif Hasan', '2025-05-01 10:00:00', 'Local'),
(2, 'Sultana Ahmed', '2025-05-01 10:15:00', 'Tourist'),
(3, 'Zayan Khan', '2025-05-02 09:30:00', 'Local'),
(4, 'Mina Akter', '2025-05-02 11:00:00', 'Local'),
(5, 'Sajid Islam', '2025-05-03 16:00:00', 'Tourist');`,
    practice: "এটি একটি Awareness মডিউল। ধরা যাক এই টেবিলে ১ কোটি ডেটা আছে। visitor_name দিয়ে সার্চ দ্রুত করার জন্য একটি SQL কমান্ড লিখুন যা visitor_name কলামের ওপর ইনডেক্স তৈরি করবে।"
  },
  24: {
    id: 24,
    title: "Professional SQL Habits",
    coreConcept: `SQL জানা মানেই
পেশাদার SQL লেখা জানা নয়।

একজন বিগিনার SQL চালাতে পারে,
কিন্তু একজন পেশাদার SQL ডেভেলপার—

- ভবিষ্যতের কথা ভাবে
- অন্য মানুষ কোড পড়বে ধরে নেয়
- পারফরম্যান্স ও সিকিউরিটির কথা ভাবে

P R O F E S S I O N A L   H A B I T S মানে—
আজ কাজ করবে
৬ মাস পরেও বোঝা যাবে
আর ভুল করবে না।`,
    conceptBreakdown: `N A M I N G   C O N V E N T I O N :

- t 1 , c 2 , x y না
- অর্থপূর্ণ নাম
- table_name , column_name

A V O I D   S E L E C T   * :

- সব কলাম দরকার হয় না
- অপ্রয়োজনীয় ডেটা আনে
- পারফরম্যান্স কমায়
- ভবিষ্যতে সিকিউরিটি ঝুঁকি

C L E A R   W H E R E :

- ফাংশন ব্যবহার না করা
- ইনডেক্স যেন কাজ করতে পারে

C O M M E N T S :

- কেন লেখা হয়েছে তা বোঝাতে
- কী করছে শুধু তা নয়

F O R M A T T I N G :

- S E L E C T
- F R O M
- W H E R E
আলাদা লাইনে
পড়তে সুবিধা`,
    storyScenario: `যুবরাজ একটি লঞ্চ টার্মিনালের ডেটাবেস মেইনটেইন করছে।
আগের ডেভেলপার রেখে গেছে এই কুয়েরি—

S ELECT  
*  
F R O M   s a l e s _ o r d e r s  
W H E R E   Y E A R ( o r d e r _ d a t e )   =   2 0 2 5 ;

যুবরাজ কোডটা দেখে থমকে গেল।

সমস্যা সে সাথে সাথে ধরলো—

- S E L E C T *  → অপ্রয়োজনীয় ডেটা
- Y E A R ( )  → ইনডেক্স কাজ করবে না
- ভবিষ্যতে কলাম বাড়লে রিস্ক

যুবরাজ পেশাদারভাবে কুয়েরি ঠিক করলো।

S ELECT  
o r d e r _ i d ,  
o r d e r _ d a t e ,  
a m o u n t  
F R O M   s a l e s _ o r d e r s  
W H E R E   o r d e r _ d a t e  
B E T W E E N  
'2 0 2 5 - 0 1 - 0 1'  
A N D  
'2 0 2 5 - 1 2 - 3 1' ;

এখন—

- ইনডেক্স কাজ করছে
- শুধু দরকারি কলাম আসছে
- কোড পড়লে যে কেউ বুঝবে

যুবরাজ জানে—
আজকের অলস SQL
আগামীর বড় সমস্যা।

পেশাদার SQL মানে—
কম শব্দ
পরিষ্কার চিন্তা
ভবিষ্যৎ নিরাপদ।`,
    dbFiddle: `CREATE TABLE sales_orders (
    order_id INT PRIMARY KEY,
    order_date DATE,
    customer_name VARCHAR(50),
    amount DECIMAL(10, 2)
);

INSERT INTO sales_orders VALUES
(1, '2025-01-10', 'Arif', 1200.00),
(2, '2025-02-15', 'Mina', 1500.00),
(3, '2025-03-20', 'Sajid', 800.00);`,
    practice: "sales_orders টেবিল থেকে শুধুমাত্র Arif-এর অর্ডারের order_id এবং amount দেখানোর জন্য একটি পেশাদার কোয়েরি লিখুন। SELECT * ব্যবহার করা যাবে না।"
  }
};
