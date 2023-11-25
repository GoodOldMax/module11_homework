function printRange(startValue, endValue) {
    let currentValue = startValue;

    const intervalId = setInterval(function() {
        console.log(currentValue);

        if (currentValue < endValue) {
            currentValue++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}


printRange(5, 15);
