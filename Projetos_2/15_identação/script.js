let x = 0;
let y = 0;

if (x == 0 && y == 0) {
  let z = 5;
  if (z > 2) {
    for (let i = 0; i < 5; i = i + 1) {  // Corrected the for loop declaration
      console.log(i);
      if (i == 2) {
        console.log("i é = 2");
      }
    }
  }
}
