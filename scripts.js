function drawTree(height) {
	for (var i = 0; i < height; i++) {
		var space = '';
		for (var a = height-i-1; a > 0; a--) {
			space += ' ';
		}
		var star = '*';
		for (var b = 0; b < i; b++) {
			star += '**';
		}
		console.log(space + star);
	}
};
drawTree(15);
