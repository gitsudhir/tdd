const sum = require('./sum');

test('an empty string it will return 0', () => {
	expect(sum("")).toBe(0);
});