function fibonacci(limit) {
    const fibonacciArray = [1, 2];
    const sumOfEvens = 2;

    for (let i = 0; i < limit; i++) {
        const fibArrayLength = fibonacciArray.length;
        const secondToLastNumnber = fibonacciArray[fibArrayLength - 2];
        const lastNumber = fibonacciArray[fibArrayLength -1];
        const currentNumber = secondToLastNumber + lastNumber;
        fibonacciArray.push(secondToLastNumber + lastNumber);

        if (currentNumber % 2 === 0) {
            sumOfEvens += currentNumber;
    }

}

return sumOfEvens;

}