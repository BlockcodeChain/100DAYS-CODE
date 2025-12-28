

# 📦 JavaScript Array Methods 

---

## 1️⃣ `concat()`

### 👉 What it does

**Joins two or more arrays** and returns a **new array**

### 🧠 Use when

You want to **merge arrays** without changing original ones

### ✅ Example

```js
const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);
console.log(result); // [1,2,3,4]
```

✔️ Original arrays stay same

---

## 2️⃣ `includes()`

### 👉 What it does

Checks **item present hai ya nahi**

### 🧠 Use when

You want to **check existence**

### ✅ Example

```js
const fruits = ["apple", "banana"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango"));  // false
```

---

## 3️⃣ `push()`

### 👉 What it does

Adds item at **end of array**

### 🧠 Use when

Add **new item last**

### ✅ Example

```js
const nums = [1, 2];
nums.push(3);

console.log(nums); // [1,2,3]
```

⚠️ Changes original array

---

## 4️⃣ `unshift()`

### 👉 What it does

Adds item at **start of array**

### 🧠 Use when

Add item **at beginning**

### ✅ Example

```js
const nums = [2, 3];
nums.unshift(1);

console.log(nums); // [1,2,3]
```

---

## 5️⃣ `pop()`

### 👉 What it does

Removes **last item**

### 🧠 Use when

Delete last element

### ✅ Example

```js
const nums = [1,2,3];
nums.pop();

console.log(nums); // [1,2]
```

---

## 6️⃣ `shift()`

### 👉 What it does

Removes **first item**

### 🧠 Use when

Delete first element

### ✅ Example

```js
const nums = [1,2,3];
nums.shift();

console.log(nums); // [2,3]
```

---

## 7️⃣ `sort()`

### 👉 What it does

Sorts array **alphabetically** (by default)

### 🧠 Use when

Sorting names, strings

### ✅ Example

```js
const fruits = ["banana", "apple", "mango"];
fruits.sort();

console.log(fruits); // ["apple","banana","mango"]
```

⚠️ For numbers:

```js
const nums = [10, 2, 5];
nums.sort((a, b) => a - b);

console.log(nums); // [2,5,10]
```
<!-- [10, 2, 5] → ["10", "2", "5"] -->
<!-- String ke jaise compare karta hai ❌ -->
Ascending  → (a, b) => a - b
Descending → (a, b) => b - a
---

## 8️⃣ `slice()`

### 👉 What it does

Cuts part of array
**Does NOT change original array**

### 🧠 Use when

You need **portion of array**

### ✅ Example

```js
const nums = [1,2,3,4,5];

const part = nums.slice(1,4);
console.log(part); // [2,3,4]
```

---

## 9️⃣ `splice()`

### 👉 What it does

**Add / remove / replace** items
⚠️ Changes original array

### 🧠 Use when

Modify array at **specific index**

### ✅ Remove

```js
const nums = [1,2,3,4];
nums.splice(1,2);

console.log(nums); // [1,4]
```

### ✅ Add

```js
const nums = [1,4];
nums.splice(1,0,2,3);

console.log(nums); // [1,2,3,4]
`````````````````````````````````````````
splice(start, deleteCount, items...)

👉 splice() array ke beech mein add / remove karta hai.
----------------------------------------

## 🔁 Quick Difference Table

| Method   | Changes Array | Use          |
| -------- | ------------- | ------------ |
| concat   | ❌             | merge arrays |
| includes | ❌             | check value  |
| push     | ✅             | add at end   |
| unshift  | ✅             | add at start |
| pop      | ✅             | remove last  |
| shift    | ✅             | remove first |
| sort     | ✅             | order items  |
| slice    | ❌             | copy part    |
| splice   | ✅             | add/remove   |

---



