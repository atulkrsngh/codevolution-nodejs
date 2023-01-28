const buffer = new Buffer.from("Vishwas", "utf-8"); // default is utf-8, no need to pass it

console.log(buffer.toJSON()); // character code in decimal
console.log(buffer); // character code in hexadecimal
console.log(buffer.toString()); // buffer as a string

buffer.write("Code"); // buffers write mode is always 'overwrite'
console.log(buffer.toString());

buffer.write("Codevolution"); // buffer discards if it's full
console.log(buffer.toString()); // 'Codevol' printed 'ution' was discarded
