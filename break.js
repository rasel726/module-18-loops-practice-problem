// for(var i = 1; i < 20; i++){
//     console.log(i);
//     if(i > 5){
//         break;
//     }
// }

// var rostGiven = 0;
// while(rostGiven < 20){
//     console.log('Roden Den, Please !!');
//     rostGiven++;
//     if(rostGiven > 4){
//         break;
//     }
// }

// var items =['bottle', 'mouse', 'sunglass', 'pen', 'speaker', 'khata', 'kolom'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item);
// }

// target: display every elements of an array
var numbers =[45, 87, 89, 56, 32, 51, 25, 30, 50, 188];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}
