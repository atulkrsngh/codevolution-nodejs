const buffer = new Buffer.from("Vishwas", "utf-8"); // global feature, no need to import anything. default is utf-8, no need to pass it

console.log(buffer.toJSON()); // character code in decimal (86, 105, 115, 104, 119, 97, 115)
console.log(buffer); // character code in hexadecimal
console.log(buffer.toString()); // buffer as a string which is Voshwas itself

buffer.write("Code"); // buffers write mode is always 'overwrite'
console.log(buffer.toString()); // Codewas

buffer.write("Codevolution"); // buffer discards if it's full
console.log(buffer.toString()); // 'Codevol' printed 'ution' was discarded
