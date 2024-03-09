

// equality test 1 true
console.log("Equality test with string: ", "Apple" === "Apple");
// equality test 1 false
console.log("Equality test with string: ", ("Apple" as string) === "Banana");

//inequality test 2 true
console.log("Inequality test with string: ", ("Apple" as string) != "Orange");
//inequality test 2 false
console.log("Inequality test with string: ", ("Apple" as string) != "Apple");

// Tests using the lower case function true
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// Tests using the lower case function false
console.log("Lower case function test: ", "HELLO".toLowerCase() !== "hello");

// Numerical tests involving equality true
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving equality false
console.log("Equality test with numbers: ", 26 !== 26);

// Numerical tests involving Inequality true
console.log("InEquality test with numbers: ", (26 as number) != 35);
// Numerical tests involving Inequality false
console.log("InEquality test with numbers: ", (35 as number) != 35);

// greater than test true
console.log("Greater than test:", 10 > 5);
// greater than test false
console.log("Greater than test:", 4 > 5);

// less than test true
console.log("Less than test:", 5 < 10);
// less than test false
console.log("Less than test:", 12 < 10);

// greater than or equal to true
console.log("Greater than and equal to test: ", 10 >= 10);
// greater than or equal to false
console.log("Greater than and equal to test: ", 7 >= 10);

// and less than or equal to true
console.log("Less than or equal to test: ", 5 <= 10);
// and less than or equal to false
console.log("Less than or equal to test: ", 16 <= 10);

// Tests using "and" operators true
console.log("And operator test: ", 5==5 && 10 > 5);
// Tests using "and" operators false
console.log("And operator test: ", 5 !== 5 && 10 !> 5);

// Tests using "or" operators true
console.log("or operator test: ", false || 10 > 5);
// Tests using "or" operators false
console.log("or operator test: ", false || 3 > 5);

// Test whether an item is in a array
const Mobile_brands:string[] = ['Apple', 'Samsung', 'Infinix'];
console.log('Test "Samsung" in the array: ', Mobile_brands.includes("Samsung"));
// Test whether an item is not in a array 
console.log('Testing "Spark" in the array: ', Mobile_brands.includes("Spark"));