function first(string = [30,1,2,4]){
    return string[0]
}

var string = [30,1,2,4]
var myNote = first(string)
console.log(myNote)

function last(arr = [40,50,79,90]){
    return arr.slice(-1)[0] 
}

var arr = [10,20,30,40,50]
var myArr = last(arr)
console.log(myArr)

function kiss(arr){
    return [last(arr), first(arr)];
}

var arr = ["Coucou", "Salut", 10]
var myKiss = kiss(arr)
console.log(myKiss)