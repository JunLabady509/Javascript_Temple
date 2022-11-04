const is = {}

is.num = 2
is.nan = Number("quatre")
is.str = "string"
is.bool = true
is.undef = undefined
is.def = "hi"
is.arr = []
is.obj ={}
is.fun = function func(){}
is.truthy = 1
is.falsy = null

console.log(typeof(is.num))
console.log(typeof(is.nan))
console.log(typeof(is.str))
console.log(typeof(is.bool))
console.log(typeof(is.undef))
console.log(typeof(is.def))
console.log(typeof(is.arr))
console.log(typeof(is.obj))
console.log(typeof(is.fun))
console.log(typeof(is.truthy))
console.log(typeof(is.falsy))