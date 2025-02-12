const validaIp = /\d{1-3}\.\d{1-3}\.\d{1-3}\.\d{1-3}/;

console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("8.8.8.8"));
console.log(validaIp.test("192.168.0.62"));