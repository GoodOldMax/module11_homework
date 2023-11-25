// Самая простая реализация
const power1 = (number, degree) => number ** degree;

// Из условий задачи не понял, можно ли пользоваться оператором возведения в степень,
// поэтому на всякий случай сделал еще реализацию с умножением в цикле
const power2 = (number, degree) => {
    let result = 1;

    for (let i = 0; i < degree; i++) {
        result *= number;
    }

    return result;
}

console.log(power1(2, 8));
console.log(power2(2, 8));
