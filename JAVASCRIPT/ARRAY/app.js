const mylist=[];
// empty array
console.log(mylist);

const numbers=[1,2,3,4,5,6];
console.log(numbers)

const fruits=["bananana","Apple",true,false,18,"king"]
// accessing element in array'
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// accessing using map
   const result = fruits.map((item) => {
  return item;
});

console.log(result);
// nested array
const nestarray=[3,6,['ty','gvf'],"jgvg",5]
console.log(nestarray[2][1])
console.log(nestarray[2][0])
// basic array method 
// concat()
// includes()
// push()
// unshift();
// pop();
// shift();
// sort();
// slice() ;
// splice ();
// join("")
// reverse()
const num1=[3,4,5];
const num2=[1,2];
console.log(num1.concat(num2))

num1.splice(1,0,9,8); 
console.log(num1)

num2.splice(1,1)
console.log(num2)

// slice original array mai change nhi krta hai 
const ans=num1.slice(1,4)
console.log(ans)
console.log(num1)