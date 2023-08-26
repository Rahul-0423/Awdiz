var age=88;
console.log(age > 20)

if(age>20) {
    console.log("You are older than 20")
} else {
    console.log("You are smaller than 20")
}
colsole.log(6===6)
colsole.log(6===50)
colsole.log(6==="6")

console.log(13 > 6 && 15 > 10 && 5556 > 987)
console.log(16 > 166 || 987 > 753 )

var age = 20;
var had = false;
if (age >= 21 && age <= 60 ) {
    console.log(`You are allowed for DL age - ${age}`)
} else if (age == 20 && !had) {
    console.log(`You are allow for LL- ${age}`)
} else {
    console.log(`You are not allow for DL. ${age}`)
}
var mobile ="oppo ";
switch(mobile){
    case "vivo" || "oppo":
    console.log("oppo")
    break;

    default:
    console.log("NOT MATCHED")
}

for (var i = 1; i <= 100; i = i + 4) {
    console.log(i)
}
