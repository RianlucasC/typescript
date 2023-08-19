let total: string | number = 400;
total = "palavra";
 
function isNuber(value: string | number) {
  return typeof value === "number";
} 

console.log(isNuber(100));