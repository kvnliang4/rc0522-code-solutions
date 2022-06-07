/* exported Transaction */

function Transaction(type, amount) {
  if (type === 'withdrawal') {
    this.type = 'withdrawal';
  } else {
    this.type = 'deposit';
  }
  this.amount = amount;
  return this;
}
