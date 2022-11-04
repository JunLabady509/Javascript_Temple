const escapeStr = "`\\/\"'"
//console.log(escapeStr)

const arr = [4,'2']

const obj = {
str : "Mdr",
num : 6,
bool : false,
undef : undefined
}

const nested = {
    arr: [4, undefined, '2'],
    obj : {str:"", num:5, bool:true}
}

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

console.log(arr)
console.log(obj)
console.log(nested)