function sum(string) {
	if (string.length === 0) {
		return 0;
	}
	return string.split(',').reduce((a, b) => a + +b, 0);
}
module.exports = sum;