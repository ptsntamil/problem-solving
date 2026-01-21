const fs = require("fs");

var input = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\r\n")
    .map(x => {
        x = x.split(" ");
        return { operation: x[0], argument: Number(x[1]) };
    });

// Part 1
var acc = 0;
var indexes = [];
for(let i = 0; i < input.length;) {
    if(indexes.includes(i)) {
        break;
    }

    var operation = input[i].operation;
    var argument = input[i].argument;
    indexes.push(i);
    
    if(operation === "acc") {
        acc += argument;
        i++;
    }
    else if(operation === "jmp") {
        i += argument;
    }
    else {
        i++;
    }
}

console.log(`Part 1: ${acc}`);

// Part 2
var replacedCodes = [];
for(let i = 0; i < input.length; i++) {
    var inputCopy = JSON.parse(JSON.stringify(input));
    var operation = inputCopy[i].operation;

    if(operation === "jmp") {
        inputCopy[i].operation = "nop";
        replacedCodes.push(inputCopy);
    }
    else if(operation === "nop") {
        inputCopy[i].operation = "jmp";
        replacedCodes.push(inputCopy);
    }
}

const validate = (arr) => {
    var acc = 0;
    var indexes = [];

    for(let i = 0; i < arr.length;) {
        if(indexes.includes(i)) {
            return 0;
        }
    
        var operation = arr[i].operation;
        var argument = arr[i].argument;
        indexes.push(i);
        
        if(operation === "acc") {
            acc += argument;
            i++;
        }
        else if(operation === "jmp") {
            i += argument;
        }
        else {
            i++;
        }
    }

    return acc;
}

for(var code of replacedCodes) {
    var value = validate(code);
    if(value > 0) {
        console.log(`Part 2: ${value}`);
    }
}