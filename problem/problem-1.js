function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i <= numbers.length; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
