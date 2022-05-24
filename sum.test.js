const sum = require('./sum');

test('an empty string it will return 0', () => {
	expect(sum("")).toBe(0);
});
test('string "1,2" it will return 3', () => {
	expect(sum("1,2")).toBe(3);
});
test('string "1" it will return 1', () => {
	expect(sum("1")).toBe(1);
});
test('a negative number will throw an exception "negatives not allowed"', () => {
	expect(() => { sum("-1,2") }).toThrow('negatives not allowed');
})
test('The method can take up to two numbers', () => {
	expect(sum("1,2,3")).toBe('The method can take up to two numbers');
});
test('string  "1\n2,3" it will return 6', () => {
	expect(sum("1\n2,3")).toBe(6);
});
test('string  "1,\n" it will return "not ok"', () => {
	expect(sum("1,\n")).toBe('not ok');
});