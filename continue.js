var numbers =[45, 87, 89, 56, 32, 51, 25, 30, 50, 188];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}
