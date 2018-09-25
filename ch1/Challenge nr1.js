/*
Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

const TAX_RATE = 0.08;
const PHONE_PRICE = 300;
const ACCESSORY_PRICE = 59;
const SPENDING_THRESHOLD = 1000;

var bank_balance = prompt("Jaki jest twój stan konta");
var amount = 0;
var phonesBought = 0;
var accessoriesBought = 0;

function calculateTax (amt){
    return amt * TAX_RATE;
}
function formattingPrice (amt){
    return amt.toFixed(2) + " zł";
}


while ( bank_balance > amount + PHONE_PRICE + ACCESSORY_PRICE){
    amount = amount + PHONE_PRICE;
    phonesBought++;
    if (amount < SPENDING_THRESHOLD ){
        amount = amount + ACCESSORY_PRICE;
        accessoriesBought++;
    }
}
amount = amount + calculateTax(amount);

console.log(
	"Your purchase: " + formattingPrice( amount ) + "( " + phonesBought + " phones" + ", " + accessoriesBought + " accessories )"
);

if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase. :("
	);
}else{
   console.log(
        "You can afford this purchase. :)"
        );
}

