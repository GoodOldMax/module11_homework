function isPrime(number) {
    if (!Number.isInteger(number) || number < 0 || number > 1000) {
        console.log('Данные неверны');
        return;
    }

    let prime = true;

    if (number == 0 || number == 1) {
        prime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                continue;
            }
            // Нашли хотя бы один делитель, можно выходить из цикла
            prime = false;
            break
        }
    }

    if (prime) {
        console.log(`Число ${number} является простым`);
    } else {
        console.log(`Число ${number} не является простым`);
    }
}

isPrime(5);
