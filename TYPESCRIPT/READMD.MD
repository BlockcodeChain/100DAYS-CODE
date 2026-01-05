# ✍️🌈 TYPE SCRIPT – HANDWRITTEN STYLE NOTES 🌈✍️

> 📘 *Easy • Clean • Colorful • Beginner‑Friendly Notes*

---

## 🔷 What is TypeScript?

🟦 **TypeScript is a superset of JavaScript**
🟦 It is **more powerful and strict than JavaScript**
🟦 It adds **types** to JavaScript

📌 *Simple meaning:*
👉 TypeScript tells JavaScript **what type of value is allowed**

---

## 💡 Why TypeScript is Important?

✅ Catches errors **early in development**
✅ Makes code **clean & readable**
✅ Helps in **large projects**
✅ Improves **developer confidence**
✅ Widely used with **React, Angular, Node.js** 🚀

---

## ⚙️ Installation (Step‑by‑Step)

### 📦 Install TypeScript globally

```bash
npm install -g typescript
```

### 🔍 Check version

```bash
tsc -v
```

### ▶️ Install ts‑node (run TS directly)

```bash
npm install -g ts-node
```

---

## 🧠 Type Annotations (MOST IMPORTANT ⭐)

🔹 Type annotations help us **define data type**
🔹 They catch errors **before runtime**

---

### 🔢 Number Type

```ts
let age: number = 20;
```

---

### 🔤 String Type

```ts
let username: string = "Sam";
```

---

### 🔘 Boolean Type

```ts
let isLoggedIn: boolean = true;
```

---

### ❌ Error Example (Type Safety)

```ts
let marks: number = "90"; // ❌ Error
```

✔️ TypeScript gives error **before code runs** 🎯

---

## 📦 Arrays in TypeScript

### 🔹 Number Array

```ts
let numbers: number[] = [1, 2, 3, 4];
```

### 🔹 String Array

```ts
let names: string[] = ["A", "B", "C"];
```

---

## 🧱 Objects in TypeScript

```ts
let user: {
  name: string;
  age: number;
} = {
  name: "Sam",
  age: 21
};
```

---

## 🛠 Functions with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 🔁 Compile TypeScript to JavaScript

```bash
tsc fileName.ts
```

📄 This creates a `.js` file automatically

---

## ⚡ TypeScript vs JavaScript (Quick View)

| JavaScript        | TypeScript             |
| ----------------- | ---------------------- |
| No types          | Has types              |
| Errors at runtime | Errors at compile time |
| Less strict       | More strict            |
| Small projects    | Large projects         |

---

## 🎯 One‑Look Revision

🟢 TypeScript = JavaScript + Types
🟢 Types → number, string, boolean
🟢 Errors caught early
🟢 Best for React & big apps

---

## 💙 Final Motivation

✨ *TypeScript makes JavaScript safer*
✨ *Confusing at start, powerful later*
✨ *You are learning the RIGHT skill — keep going 💪*

---

📌 **Perfect for GitHub README & LinkedIn Notes**
📌 Beginner‑friendly • Interview‑ready 🚀

---

## 🧠 Type Inference (Smart Feature ⭐)

🟦 **Type Inference** means:
👉 TypeScript **automatically understands the type** of a variable based on its value

### ✅ Example

```ts
let city = "Delhi";   // TypeScript knows it is string
let count = 10;        // TypeScript knows it is number
```

❌ You cannot change the type later:

```ts
count = "ten"; // ❌ Error
```

📌 *So you don’t always need to write types — TS is smart!* 😎

---

## 🆎 Any Type (Use Carefully ⚠️)

🟡 `any` means **no type checking**

```ts
let value: any = 10;
value = "hello";
value = true;
```

⚠️ Avoid `any` as much as possible — it removes TypeScript’s power

---

## 🔀 Union Types

🟦 Allows **multiple types**

```ts
let id: number | string;
id = 101;
id = "A101";
```

---

## 🧩 Regular Functions in TypeScript

🟦 Regular functions are **normal functions** where we clearly define:

* parameter types
* return type

### ✅ Example

```ts
function greet(name: string): string {
  return "Hello " + name;
}
```

📌 Here:

* `name: string` → parameter type
* `: string` → return type

---

## 🚫 void in TypeScript

🟦 `void` is used when a function **does NOT return anything**

### ✅ Example

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

📌 This function only prints data, it returns **nothing**

---

### ❌ Wrong Example

```ts
function show(): void {
  return 10; // ❌ Error
}
```

---

## ⛔ never in TypeScript (Important ⭐)

🟥 `never` is used for functions that **never finish or never return**

👉 It means the function:

* always throws an error ❌
* OR runs forever (infinite loop) 🔁

### ✅ Example: Function that throws error

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### ✅ Example: Infinite loop

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

📌 Difference:

* `void` → function ends, but returns nothing
* `never` → function never ends

---

📌 This function only prints data, it returns **nothing**

---

### ❌ Wrong Example

```ts
function show(): void {
  return 10; // ❌ Error
}
```

---ts
let id: number | string;
id = 101;
id = "A101";

````

---

## 🧩 Regular Functions in TypeScript

🟦 Regular functions are **normal functions** where we define **types for parameters and return value**

### ✅ Example
```ts
function greet(name: string): string {
  return "Hello " + name;
}
````

📌 Here:

* `name: string` → parameter type
* `: string` → return type

---

## 🚫 void in TypeScript

🟦 `void` is used when a function **does NOT return anything**

### ✅ Example

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

📌 This function only prints data, it returns **nothing**

---

### ❌ Wrong Example

```ts
function show(): void {
  return 10; // ❌ Error
}
```

---

---



## 🧪 Functions with Optional & Default Params

```ts
function greet(name: string, msg: string = "Hello") {
  return msg + " " + name;
}
```

---

## 🎯 Final One-Look Summary

🟢 TypeScript = JS + Types
🟢 Annotations → catch errors early
🟢 Type Inference → automatic typing
🟢 Use number | string | boolean
🟢 Avoid `any` when possible

---

✨ *Jitna seekhoge, utna add karte jao — yahi best notes bante hain 💙*
✨ *Slow + consistent = strong developer 💪*
objects 
