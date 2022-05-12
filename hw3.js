function getLength(arr) {
    return arr.reduce(function items(acc, item) {
        if (Array.isArray(item)) return item.reduce(items);
        return acc + 1;
    }, 0);
}
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); 