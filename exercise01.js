const arr = [4, 8, 15, 16, 23, 42, 'foo', null, NaN, true, undefined];

function getArrayInfo() {
    let zeroFound = false;
    let evenItemsCount = 0;
    let oddItemsCount = 0;
    let otherItemsCount = 0;
    
    arr.forEach(function(item, index, array) {
        if (typeof item != 'number') {
            otherItemsCount++;
        } else if (item === 0) {
            zeroFound = true;
        } else if (item % 2 === 0) {
            evenItemsCount++;
        } else {
            oddItemsCount++;
        }
    });
    
    console.log(`Найден ноль: ${zeroFound}`);
    console.log(`Количество четных чисел: ${evenItemsCount}`);
    console.log(`Количество нечетных чисел: ${oddItemsCount}`);
    console.log(`Количество прочих элементов: ${otherItemsCount}`);    
}

getArrayInfo(arr);
