const myInterval=setInterval(()=>{
    console.log("Hello world after 5 second")
},5000)


setTimeout(()=>{
    clearInterval(myInterval)
    console.log("Stop Hello World")
},10000)


// function greet({name,age,country}){
//     console.log(`Hello ${name},age is ${age} from ${country}`);
// }
// greet({name:"Sanaya",age:21,country:"INDIA"});

// or

function greet(name,age,country){
    return {
        name,age,country,
    };
    // console.log(`Hello ${name},age is ${age} from ${country}`);
}
console.log(greet("Sanaya",21,"INDIA"));
// 

