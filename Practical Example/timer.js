

window.onload = function(){

    var myMessage = document.getElementById('message');
    var colourChanger = document.getElementById('colour-changer');
    var colours = ['red', ' blue', 'green', 'pink'];
    var counter = 0;

    function showMessage(){
        myMessage.className = 'show';
    }

    setTimeout(showMessage, 3000);

    function changeColour(){

        if (counter >= colours.length){
            counter = 0;
        }

        colourChanger.style.background = colours[counter];
        counter++;
    }

    function intervalOn (){
        myTimer = setInterval(changeColour, 3000);
    };
    intervalOn();

    colourChanger.onclick = function(){
        if(colourChanger.className == 'on'){
            clearInterval(myTimer);
            colourChanger.innerHTML = 'Interval stop, click to START';
            colourChanger.className = 'off';
        }else{

            intervalOn();
            colourChanger.innerHTML = 'Click to STOP';
            colourChanger.className = 'on';

        };
        


    };

};