const numberWithString = (arr) => {
    let arr2 = [];
    arr.map((item) => {
        
        item.split("").map((char) => {
            if (char == parseInt(char)) {
                arr2.push(item);
            }
        })
    })

    return arr2;
 
};

console.log(numberWithString(["Fatemeh", "Hanieh7", "Ali", "Neda12"]));
