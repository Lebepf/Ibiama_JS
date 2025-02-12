const validamarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validamarca.test("Marca: Nike"));
console.log(validamarca.test("Marca: ads"));
console.log(validamarca.test("Marca: "));