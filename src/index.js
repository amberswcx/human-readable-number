module.exports = function toReadable (number) {
    const numbersUntilNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const numbersUntilNineteen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    console.log(number.toString().length);
    if (number == 0)
        return 'zero';
    else if (number.toString().length === 1)
        return getDigit(number);
    else if (number.toString().length === 2)
        return getDozen(number);
    else if (number.toString().length === 3)
        return getHundred(number);

    function getHundred(num) {
        const firstDigit = Math.floor(num / 100);
        const lastDigits = num % 100;

        return `${getDigit(firstDigit)} hundred ${getDozen(lastDigits)}`.trim();
    }

    function getDozen(num) {
        if (num > 10 && num < 20) {
            return numbersUntilNineteen[num - 10]
        }

        const firstDigit = Math.floor(num / 10);
        const secondDigit = num % 10;

        return `${dozens[firstDigit]} ${getDigit(secondDigit)}`.trim();
    }

    function getDigit(num) {
        return numbersUntilNine[num];
    }
}
