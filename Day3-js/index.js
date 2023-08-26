for (var i = 100; i>=50; i--){
    console.log(i)
    if(i==60){
        console.log("We got 60")
        break;
    
    }
}

var start=35;
var end=265;
for(var i =start; i<=end;i++){
    if(i % 2 == 0){
        console.log(`${i} - Even number`)
    } else{
        console.log(`${i} - Odd number`)
    }
}
var start = 125;
var end = 854;
var oddcount = 0;
var evencount = 0;
for (var i = start; i <= end; i++) {
    if (i % 2 != 0) {
            oddCount++;
        } else {
            evenCount++;
        }
}
console.log(oddCount, "Total odd number")
console.log(evenCount, "Total even number")

var result = 0;
for(var i = 1; i<=10; i++){
    if (i % 2 == 0){
        result = result +1;
    }
}
console.log(result);

var number = 3;
var result = 1;
for(var i = 2; i<= number; i++){
    result = result * i;
}
console.log(result)

var number = 3;
var result ;
for(var i = 2; i<= number; i++){
    if(result == undefined){
        result = i;
    } else{
        result= result *i
    }
}
console.log(result)