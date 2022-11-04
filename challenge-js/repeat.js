// function repeat(multi, str){
//     while(multi > 0){
//         multiStr += str
//         multiStr += "";
//         multi--;
//       }
//       return multiStr
// }


// function repeat(multi, str){
//     for(var i = 0; i < multi; i++){
//         multiStr += str
//         multiStr += "";
//       }
//       return multiStr
// }

// var multi = 8;
// var str = "A";
// var multiStr = "";
// var result = repeat(multi,str)
// console.log(result)

let repeat = (s, n) => {
  let res = ""
  for (let pass = 0; pass < n; pass++) {
      res += s
  }
  return res
}