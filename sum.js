function sum(string) {
	if (string.length === 0) {
		return 0;
	}
	if (string.indexOf('-') >= 0) {
		throw new Error('negatives not allowed');
	}
	return string.split(',').reduce((a, b) => a + +b, 0);
}
module.exports = sum;