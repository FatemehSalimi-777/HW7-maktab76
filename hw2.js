function recurIndex(string) {
    let obj = {};
    let index = [];
    if (Boolean(string) === false) {
        return obj;
    }
    const array = string.split("");
    let temp = array.find((item, i) => array.indexOf(item) !== i);
    array.forEach((value, i) => {
        if (value === temp)
            index.push(i);
    })
    obj[temp] = index.splice(0, 2);
    return obj;
}
console.log(recurIndex("AREDCBSDERD"));