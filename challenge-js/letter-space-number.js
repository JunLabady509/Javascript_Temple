// function letterSpaceNumber(str="Salut"){
//     var x = str.length
//     console.log(x)
//     var reg= str.match(/^[a-zA-Z 0-9$]{0, x}/)
//     return reg
// }

// console.log(letterSpaceNumber("Bonjour"))

const letterSpaceNumber = (str) => { 
    return str.match(/\w\s\b\d{1}\b/g) == null ? [] : str.match(/\w\s\b\d{1}\b/g) 
}