function removeDuplicates(numbers) {
    return numbers.filter(function (value, index) { return numbers.indexOf(value) === index; });
}
