const pontoRegex = /./

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));
console.log(pontoRegex.test("MAAA"));

const dRegex = /\d/; //[0-9]:


console.log("d")
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));

const dRegex2 = /\D/; // [^0-9]

console.log("D")
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));

const sRegex = /\s/;

console.log('s');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("aaaaa"));

