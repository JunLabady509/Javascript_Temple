// export {getArchitects, getClassical, getActive, getBonannoPisano}

// function getArchitects(){
//     let Arr = []
//     let Arr1 = Array.from(document.getElementsByTagName('a'))
//     let Arr2 = Array.from(document.getElementsByTagName('span'))
//     Arr.push(Arr1)
//     Arr.push(Arr2)

//     return Arr
// }

// function getClassical(){
//     let Arr = []
//     let Arr1 = Array.from(document.getElementsByClassName('a classical'))
//     let Arr2 = Array.from(document.getElementsByClassName('a :not(classical)'))
//     Arr.push(Arr1)
//     Arr.push(Arr2)
    
//     return Arr
// }

// function getActive(){
//     let Arr = []
//     let Arr1 = Array.from(document.getElementsByClassName('a classical'))
//     let active = Arr1.querySelectorAll("true.active")
//     let non_active = Arr1.querySelectorAll("false.active")
//     Arr.push(active)
//     Arr.push(non_active)
    
//     return Arr
// }

// function getBonannoPisano(){
//     let Arr = []
//     var isHere = document.getElementById("BonannoPisano")
//     let Arr1 = document.getElementsByClassName('a classical')
//     var remainings = Arr1.querySelectorAll("true.active")
//     Arr.push(isHere)
//     Arr.push(remainings)
    
//     return Arr
// }


export { getArchitects, getClassical, getActive, getBonannoPisano }

function getArchitects() 
{
    let result = [];
    result.push(Array.from(document.getElementsByTagName("a")));
    result.push(Array.from(document.getElementsByTagName("span")));
    // Array.from(...) crée un tableau à partir d'un objet itérable (string, nodeList, HTMLCollection, etc.)
    // document.getElementsByTagName(myTag) renvoie une collection d'éléments dont le tag correspond à myTag.

    return result;
}

function getClassical()
{
    let result = [];
    result.push(Array.from(document.querySelectorAll("a.classical")));
    result.push(Array.from(document.querySelectorAll("a:not(.classical)")));

    return result;
}

function getActive()
{
    let result = [];
    result.push(Array.from(document.getElementsByClassName("classical active")));
    result.push(Array.from(document.querySelectorAll(".classical:not(.active)")));

    return result;

}

function getBonannoPisano()
{
    let result = [];
    result.push(document.getElementById("BonannoPisano"));
    result.push(Array.from(document.querySelectorAll("a.classical.active:not(#BonannoPisano)")));

    return result;
}