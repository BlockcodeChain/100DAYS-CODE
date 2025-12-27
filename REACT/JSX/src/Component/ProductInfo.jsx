import React from 'react'

const ProductInfo = () => {
     const product={
        name:"Laptop",
        prize:"$1200",
        availability:"In Stock",
      }
  return (
    <div>
     <h1>Product :- {product.name}</h1>
      <h1>Product :- {product.prize}</h1>
       <h1>Product :- {product.availability}</h1>

     {/* <h1>Full Product Object</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre> */}


         {/* <p>
            ## 🔹 `JSON.stringify()` kya hota hai?

👉 `JSON.stringify()` **JavaScript ka function** hai
👉 Iska kaam hota hai **object ko string (text) me convert karna**

### ❌ Object direct print nahi hota

```js
{ name: "Laptop", price: "$1200" } ❌
```

### ✅ String print ho jaata hai

```js
"{ name: 'Laptop', price: '$1200' }" ✅
```

Isliye React me object dikhane ke liye `JSON.stringify()` use karte hain.

---

## 🔹 Ab is line ko tod-tod ke samjho 👇

```js
JSON.stringify(product, null, 2)
```

### 1️⃣ `product`

👉 Jo object tum print karna chahti ho

```js
const product = {
  name: "Laptop",
  price: "$1200",
  availability: "In Stock"
}
```

---

### 2️⃣ `null` (Second parameter)

👉 Iska matlab:

> “koi value filter mat karo, **sab kuch print karo**”

🔸 Advanced case me yahan hum decide kar sakte hain
kaunsa key print karna hai, kaunsa nahi
Abhi ke liye:

```
null = sab print karo
```

---

### 3️⃣ `2` (Third parameter)

👉 Iska matlab:

> “2 spaces ka gap dekar **achhe se format** karo”

Example 👇

❌ Without `2`

```
{"name":"Laptop","price":"$1200","availability":"In Stock"}
```

✅ With `2`

```
{
  "name": "Laptop",
  "price": "$1200",
  "availability": "In Stock"
}
```

👉 Isko bolte hain **pretty print**

---

## 🔹 `<pre>` tag kyun use kiya?

```jsx
<pre>{JSON.stringify(product, null, 2)}</pre>
```

👉 `<pre>` ka matlab:

> “jo formatting hai wahi dikhana”

Agar `<pre>` nahi use karoge:

* sab ek line me aa jaayega
* spacing kharab ho jaayegi

---

## 🧠 Ek line me yaad rakhna

👉 **`JSON.stringify(object, null, space)`**

* `object` → kya print karna hai
* `null` → sab keys print karo
* `space` → formatting ke liye gap

---

## 💬 Interview line (simple)

Agar interview me pooche:

> Why JSON.stringify?

Tum bolo 👇

> “React objects ko directly render nahi karta,
> isliye hum JSON.stringify use karke object ko readable string me convert karte hain.”

---

         </p> */}


    </div>
  )
}

export default ProductInfo
