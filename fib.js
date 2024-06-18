function fibs (position) {
    if (position < 1) {
        return []
    } else {
        let n1 = 0;
        let n2 = 1;
        const fibArray = [1]
        for (let i=position;i>1;i--) {
            n3 = n1+n2
            fibArray.push(n3);
            n1 = n2;
            n2 = n3;
        };
        return fibArray;
    };
};

function fibsRec (position) {
    if (position <= 1) {
        let value = [position]
        return value
    } else {
        const value1 = fibsRec(position-2)
        const value2 = fibsRec(position-1)
        return value2.concat([value1[value1.length-1]+value2[value2.length -1]])
    }
}

console.log(fibsRec(15))
console.log(fibs(15))