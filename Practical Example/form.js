var myForm = document.querySelector('#my-form');
var validMessage = document.querySelector('#message');
var afterSubmit = document.querySelector('#afterSubmit');
var nameInput = document.querySelector('#name-input');

function changeBorder() {
    this.classList.add('xxx');
}
    
function clearBorder() {
    this.style.border = '';
}

function onSubmit(event) {
    event.preventDefault();
    if (myForm.name.value === ''){
        validMessage.innerHTML = 'please enter a name';
    } else {
        validMessage.innerHTML = '';
        afterSubmit.innerHTML = myForm.name.value + '<br/>' +  myForm.colour.value;
        myForm.name.value ='';
    }
}

nameInput.addEventListener('focus', changeBorder);
nameInput.addEventListener('blur', clearBorder);
myForm.addEventListener('submit', onSubmit);






