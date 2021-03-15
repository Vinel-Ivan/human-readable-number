const numbers  = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve'
];

const exeptions = {
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    8: 'eigh'
}

const exponents = ['teen', 'ty', 'hundred'];

module.exports = function toReadable (number) {
  if (numbers[number]) return numbers[number];
  const arrayOfRevercedNumbers = `${number}`.split('').reverse();
  const resultStr = arrayOfRevercedNumbers.reduce((acc, item, index) => {
    checkForSomething(item, index, acc, arrayOfRevercedNumbers)
    checkExeptions(item, index, acc);

    if(index === 2) {
        acc.push(`${numbers[item]} ${exponents[index]}`)
    }
    return acc;
  },[]);
  return resultStr.reverse().join(' ');
}

function checkForSomething(item, index, acc, array) {
    if (index + 1 === 1 && array[index + 1] === '1') {
        if (item < 3) {
            acc.push(numbers[`1${item}`]);
        } else if (item !== '4' && exeptions[item]) {
            acc.push(exeptions[item].concat(exponents[index]));
        } else {
            acc.push(numbers[item].concat(exponents[index]));
        }
    } else if (index === 0 && item !== '0') {
        acc.push(numbers[item]);
    }
}

function checkExeptions(item, index, acc) {
    if (item === '1') return;
    if (index === 1 && exeptions[item]) {
        acc.push(exeptions[item].concat(exponents[index]));
    } else if(index === 1 && item !== '0') {
        acc.push(numbers[item].concat(exponents[index]));
    }
}
