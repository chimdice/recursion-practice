function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        const value = array.pop();
        const nextArray = mergeSort(array);

        let cont = true;
        const newArray = [];

        
        for (i=0; i<nextArray.length; i++) {
            if ((value < nextArray[i]) && cont) {
                    newArray.push(value);
                    cont = false;
                };
            
            newArray.push(nextArray[i])
        };

        if (newArray.length === nextArray.length) {
            newArray.push(value);
        };

        return newArray
    };
};


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));