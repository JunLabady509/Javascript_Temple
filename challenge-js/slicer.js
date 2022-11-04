// var T = [8, "ç", 3, ',', "s"]
// var s = "Bonjour"

// function Slice(T, start) {
//     if (typeof(T) === "string") {
//         let letter = ''
//         for (let i = start; i <= T.length - 1; i++){
//             letter = letter + T[i]
//         }
//         return letter
//     }

//     else {
//         for (var i = start; i < T.length(); i++) {
//             return T.splice(start, end)
//         }
//     }
// }

// console.log(Slice("abcdef", 2))


function slice(obj, start, end=(obj.length)){
    let st = 0
    let ed = 0
    if(start < 0){
        st = obj.length + start
    } else {
        st = start
    }
    if(end < 0){
        ed = obj.length + end
    }else {
        ed = end
    }
    if(typeof obj === "string"){
        let str = ''
        for(let i=st; i<ed; i++){
            str += obj[i]
        }
        return str
    } else {
        let arr = []
        for(let i=st; i<ed; i++) {
            arr.push(obj[i])
        }
        return arr
    }
}