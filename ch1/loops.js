var i = 0;
console.log( "First loop" );
// a `while..true` loop would run forever, right?
while (true) {
	// stop the loop?
	if ((i <= 9) === false) {
		break;
	}

	console.log( i );
	i++;
}
// 0 1 2 3 4 5 6 7 8 9

console.log( "Second loop" );
i=0;

while (i <= 9) {
    console.log( i );
	i++;
}
// 0 1 2 3 4 5 6 7 8 9


console.log( "Third loop" );
for (var i = 0; i <= 9; i = i + 1) {
	console.log( i );
}
// 0 1 2 3 4 5 6 7 8 9