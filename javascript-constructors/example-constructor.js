function ExampleConstructor() {}

console.log('ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('Type of ExampleConstrictor.protoype: ', typeof ExampleConstructor.prototype);

var constructed1 = new ExampleConstructor();

console.log('Value of contructed1: ', constructed1);
console.log('contructed1 instance of ExamplecConstructor: ', constructed1 instanceof ExampleConstructor);
