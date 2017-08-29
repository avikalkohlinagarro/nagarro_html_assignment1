function square(number) {
    return number*number;
}

function for_each(array,callback) {
    var i=0;
    while(i<array.length) {
        console.log(callback(array[i]));
        i++;
    }
}

function create_map(array,callback) {
    var i=0;
    var newArr = [];
    while(i<array.length) {
        newArr.push(callback(array[i]));
        i++;
    }
    return newArr;
}
var testArray = [1,2,3,4];
for_each(testArray,square);
var newArray = create_map(testArray,square);
console.log(newArray);