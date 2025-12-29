# Pascal's Triangle & Function Basics — Handwritten-Style Notes

---

## 1️⃣ FUNCTION BASICS

### 🔹 What is a Function?

* Block of code performing a **specific task**
* Can be **reused multiple times**
* Follows **DRY principle** (Don't Repeat Yourself)

### 🔹 Syntax

```cpp
return_type function_name(parameters) {
    // code
}
```

### 🔹 Return Types

| Return Type | Meaning               |
| ----------- | --------------------- |
| void        | No return value       |
| int         | Returns integer       |
| float       | Returns decimal       |
| long long   | Returns large integer |

### 🔹 Example

```cpp
void greet() {
    cout << "Hello";
}
```

### 🔹 Mind Map

```
Function
│
├── With return
├── Without return (void)
├── With parameters
├── Without parameters
└── Reusability (DRY)
```

---

## 2️⃣ PASCAL'S TRIANGLE

### 🔹 Definition

* Each row starts & ends with **1**
* Middle elements = **sum of two above**
* Element = **Combination (nCr)**

Example:

```
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

### 🔹 Formula

* **Combination:** nCr = n! / (r! * (n-r)!)
* **Optimized (no factorial):** value = value * (n - col) / (col + 1)

### 🔹 Mind Map

```
Pascal Triangle
│
├── Single Element → nCr (O(r))
├── Nth Row → Optimized O(n)
├── Full Triangle
│     ├── Factorial ❌ O(n³)
│     └── Optimized ✅ O(n²)
└── Indexing
      ├── 0-based → nCr
      └── 1-based → (n-1)C(r-1)
```

---

## 3️⃣ Nth Row (O(n))

```cpp
#include<iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    long long ans = 1;
    cout << ans << " ";

    for (int col = 1; col < n; col++) {
        ans = ans * (n - col) / col;
        cout << ans << " ";
    }
    return 0;
}
```

* **Input:** n = 4
* **Output:** 1 3 3 1
* **Time:** O(n), **Space:** O(1)

---

## 4️⃣ Element at Given Position (n, r)

```cpp
#include<iostream>
using namespace std;

int main() {
    int n, r;
    cin >> n >> r;

    long long ans = 1;
    for (int i = 0; i < r; i++) {
        ans = ans * (n - i) / (i + 1);
    }

    cout << ans;
    return 0;
}
```

* **0-based indexing** → Element = nCr
* **Time:** O(r), **Space:** O(1)

---

## 5️⃣ Full Pascal Triangle (Optimized O(n²))

```cpp
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i <= n; i++) {
        long long ans = 1;
        for (int col = 0; col <= i; col++) {
            cout << ans << " ";
            ans = ans * (i - col) / (col + 1);
        }
        cout << endl;
    }
    return 0;
}
```

* **Time:** O(n²)
* **Space:** O(1)

---

## 6️⃣ Complexity Comparison

| Task                      | Time  | Space |
| ------------------------- | ----- | ----- |
| Single element            | O(r)  | O(1)  |
| Nth row                   | O(n)  | O(1)  |
| Full triangle (optimized) | O(n²) | O(1)  |
| Full triangle (factorial) | O(n³) | O(1)  |

---

## 7️⃣ Quick Interview Notes

* Value at position (n, r) = nCr
* Full triangle cannot be O(n) (elements = O(n²))
* Optimized nCr avoids factorial, reduces complexity
* Functions → code reuse & cleaner logic

---

## ✅ Key Takeaways

* **Function** → reuse, DRY principle
* **Pascal Triangle** → combination logic
* **Optimized formula** → O(n) / O(n²)
* **Interview ready concepts** → nCr, row, full triangle
* **Indexing** → 0-based / 1-based clear

---
