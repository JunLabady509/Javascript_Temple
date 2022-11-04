function sign(number) {
    if (number === 0) {
        return 0
    }else{
        if(number > 0){
            return 1
        }else{
            return 1*(-1)
        }
    }
}

var number = 4
console.log(sign())

function sameSign(num1, num2){
    if(num1 == 0 && num2 == 0){
        return true
    }else{
        if(num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0) {
            return true
        }else{
            return false
        }
    }
}

var num1 = 3
var num2 = 4
var test = sameSign(num1,num2)
console.log(test)