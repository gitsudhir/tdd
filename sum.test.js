const sum = require('./sum');

test('an empty string it will return 0', () => {
	expect(sum("")).toBe(0);
});
test('string "1,2" it will return 3', () => {
	expect(sum("1,2")).toBe(3);
});