function fibs (position) {
    if (position < 1) {
        return []
    } else {
        let n1 = 0;
        let n2 = 1;
        const fibArray = [1]
        for (let i=position;i>1;i--) {
            fibArray.push(n1+n2);
            n1 = n2;
            n2 = n2 + n1;
        };
        return fibArray;
    };
};

function fibsRec (position) {

    const list = [];

    if (position === 1) {
        list.push(position)
    } else {
        list.push(position)
        fibsRec(position-1)
    }
    return list
}

function sumList (number) {
    const list = []
    if (number === 1) {
        list.push(number)
        return list
    } else {
        list.push(number)
        const newlist = list.concat(sumList(number-1))
        return newlist;
    }
}

const out = sumList(4);
console.log(out)