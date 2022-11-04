const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

function get(key) {
  return sourceObject[key]
}

var key = "num"
var keyResult = get(key)
console.log(keyResult)

function set(key,value) {
  sourceObject[key] = value
  return sourceObject[key]
}

var key = "nu"
var value = 20

var Res = set(key,value)
console.log(Res)