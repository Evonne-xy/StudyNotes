/**
 * 深拷贝
 */

const obj = { name: "Evonne"};
obj.loop = obj

// const obj = {
//   age: 20,
//   name: "xxx",
//   address: {
//     city: "Beijing",
//   },
//   arr: ["a", "b", "c"],
// };
// obj.loop = obj
const obj2 = deepClone(obj);
console.log(obj2);

function deepClone(obj,hash=new WeakMap()) {
    if(typeof obj !== 'object' || obj == null){
        return obj
    }

    if(hash.has(obj)){
        return hash.get(obj)
    }
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    hash.set(obj, result)

    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            result[i] = deepClone(obj[i],hash) //这个时候执行完后result值已经变了，所以hash里面也会改变
        }
       
    }
    return result
}



