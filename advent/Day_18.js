function calcExpression(exp) {
    let prev = 0, operator = "";
    for(let i=0;i<exp.length;i++) {
        let currChar = exp[i];
        if(prev && operator) {
            prev = eval(`${prev}${operator}${currChar}`);
            operator = "";
        }
        if(!prev) {
            prev = currChar;
        }
        if(currChar === "+" || currChar === "*") {
            operator = currChar;
        }
    }
    return prev;
}

function formatExp(exp) {
    newChatr = "", opened= [], originalChar = "";
    for(var i =0; i<exp.length;i++) {
        let cr = exp[i];
        if(exp.indexOf("(") === -1) {
            return calcExpression(exp);
        }
        if(cr === "(") {
            opened.push("(");
        } 
        if(opened.length) {
            newChatr += cr;
        }
        if(cr === ")") {
            opened.pop();
        }
        if(opened.length == 0 && newChatr) {
            originalChar += formatExp(newChatr.slice(1,-1));
            newChatr = "";
        }
        if(opened.length == 0 && !newChatr && cr !== ")") {
            originalChar += cr;
        }
    }
    return formatExp(originalChar);   
}
