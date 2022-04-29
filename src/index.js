const readline = require('readline');

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y
};

const operators = Object.keys(calculator);

const stack = [];

console.log('CLI RPN Calculator\n')

function main() {
  io.question('> ', arg => {
    const input = arg.trim();

    if (input === 'q') {
      return io.close();
    }

    const result = calculate(input);
    console.log(result);
    main();
  });
}

function calculate(input) {
  const isInputValid = validateInput(input)
  if (isInputValid) {
    const chars = input.split(' ');

    for (let char of chars) {
      if (operators.includes(char)) {
        if (stack.length > 1) {
          const y = parseFloat(stack.pop());
          const x = parseFloat(stack.pop());
          const result = calculator[char](x, y);
          stack.push(result);
        } else {
          return '\x1b[31mInsufficient numbers\x1b[0m';
        }
      } else {
        stack.push(parseFloat(char));
      }
    }

    if (chars.length === 1 && !operators.includes(input)) {
      return input;
    } else {
      const output = stack[stack.length - 1];
      return output;
    }
  } else {
    return '\x1b[31mInvalid input\x1b[0m';
  }
}

function validateInput(input) {
  return input && (/\d/.test(input) || operators.includes(input));
}

main();

module.exports = {
  calculate
};
