const fool=[1,2,3,4,5];
function sum(...args){
    let total=0;
    for(let num of args){
        total+=num;
    }
    return total;
    }
console.log(sum(...fool));