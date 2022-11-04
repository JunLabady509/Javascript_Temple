// function IndexOf(T, val) {
//   for(var i = 0; i < T.length; i++){
//     if (val === T[i]){
//       return i
//   }
// }
//   return -1
// }

// var T = ["go", "salut","Bonjour"]
// var val = "salut";

// console.log(IndexOf(T, val))


// function lastIndexOf(T){
//   var i = (T.length) - 1
//     return i
// }

// console.log(lastIndexOf(T))

// function includes(T, val){
//   for(var i = 0; i < T.length; i++){
//     while (val === T[i])
//       return true
//   }
//   return false
// }

// console.log(includes(T,"Bonj"))

function includes(arr, elem) {
  let flag = false
  for (const letter of arr) {
      if (letter === elem) {
          return true
      }
  }
  return false
}
function indexOf(arr, elem, start = 0) {
  for (let i = start; i < arr.length; i++) {
      if (arr[i] === elem) {
          return i
      }
  }
  return -1
}
function lastIndexOf(arr, elem, start = arr.length - 1) {
  let x = -1
  for (let i = start; i >= 0; i--) {
      if (arr[i] === elem) {
          return i
      }
  }
  return -1
}