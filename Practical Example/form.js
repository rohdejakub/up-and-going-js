var myForm = document.forms.myForm;
var validMessage = document.getElementById('message');
var afterSubmit = document.getElementById('afterSubmit');


myForm.name.onfocus = function(){
    myForm.name.style.border = '4px solid blue';
};
myForm.name.onblur = function(){
    myForm.name.style.border = '';
};

myForm.onsubmit = function(){

    if (myForm.name.value == ''){
        validMessage.innerHTML = 'please enter a name';
        return false;
    }else{
        validMessage.innerHTML = '';
        return true;
        
    }
}




