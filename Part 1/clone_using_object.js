// clone using object assign 

const obj = {
    key1 : "value1",
    key2 : "value2",
}
//const obj2 = obj; // ana thi karishu clone to obj ma change karishu aa obj2 ma pn thashe 
// const obj2 = {...obj} // have nai thay change 
// or we can do it like this also 
const obj2 = Object.assign({},obj)
obj.key3 = "value3" 
console.log(obj)
console.log(obj2)
