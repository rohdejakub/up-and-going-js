var actualDate = new Date();
console.log(actualDate);
var pastDate = new Date(1990 , 7, 7);
console.log(pastDate);
var birthDay = new Date(1984,0 ,15);
console.log(birthDay.getMonth()); 
console.log(birthDay.getFullYear());
console.log(birthDay.getDate()); //Dzień
console.log(birthDay.getHours());
console.log(birthDay.getTime()); //Milisekundy od  01.01.1970
