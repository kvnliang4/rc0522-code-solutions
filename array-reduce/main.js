const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const test = 2;

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('Sum:', sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('Product:', product);

const balance = account.reduce((balance, transaction) => {
  if (transaction.type === 'deposit') {
    balance = balance + transaction.amount;
  } else if (transaction.type === 'withdrawal') {
    balance = balance - transaction.amount;
  }
  return balance;
}, 0);
console.log('Balance:', balance);

const composite = traits.reduce((trait1, trait2) => Object.assign(trait1, trait2));
console.log('Composite:', composite);
