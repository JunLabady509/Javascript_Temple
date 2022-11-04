function isPositive(number=1) {
    if(number>0){
        return true
    }else{
        return false
    }
}

var number = -5;
var test = isPositive(number)
console.log(test)


function abs(number) {
    if(number < 0){
        return number*(-1)
    }else{
        return number
    }
}

var abstest = abs(number)
console.log(abstest)