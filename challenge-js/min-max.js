function max(num1=2, num2=2) {
    if(num1 != num2){
        if(num1 > num2){
            return num1
        }else{
            return num2
        }
    }else{
        return false
    }

}
console.log(max())


function min(num1=2, num2=2) {
    if(num1 != num2){
        if(num1 < num2){
            return num1
        }else{
            return num2
        }
    }else{
        return false
    }

}
console.log(min())
