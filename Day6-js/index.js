const array = [1,2,3,4,5,7,2,97,58,45,61,254,12];
const target = 15;

for(var i = 0; i < array.length - 2; i++){
    for(var j = i+1; j < array.length -1; j++){
        for(var k = j +1; k < array.length; k++){
            if(array[i] + array[j]+ array[k] == target){
                console.log(array[i], array[j], array[k])
            }
        }
    }
}

function addition(){
    var a = 34;
    var b = 98;
    return a+b;
}
console.log(addition())

function substraction(){
    var a = 98;
    var b = 98;
    return a-b;
}
console.log(substraction())

function multi(firstNumber, secondNumber, third) {
    console.log(firstNumber, secondNumber, third)
    const result = firstNumber * secondNumber;
    const result2 = firstNumber + secondNumber + third;
    return result + result2;
}
console.log(multi(2, 5, 6));

function additionOfAllElement(array){
    var result = 0;
    for (var i = 0; i < array.length; i++){
        result = result + array[i]
    }
    return result;
}
console.log(additionOfAllElement(array))






// SHIFT ATL F