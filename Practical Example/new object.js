var myCar = {
    topSpeed: 220,
    marka: "BMW",
    fuelTank: 50,
    avgFuel: 10,
    travel: function(speed, time){
        if( speed > myCar.topSpeed ){
            speed = myCar.topSpeed;
        }
        let fuelUsed = (speed * time) / 100 * myCar.avgFuel;
        if( fuelUsed > myCar.fuelTank){
            console.log('Zabraknie ci paliwa! Maksymalny dystans to '  + myCar.maxDistance + 'km. Przejedziesz ten dystans z prędkością ' + speed + ' w czasie ' + myCar.maxDistance / speed + 'h.');
        }else{
        console.log('W czasie ' + time + 'h. Przejedziesz ' + speed * time + 'km.');
        };
    
    }
};
myCar.maxDistance = myCar.fuelTank / myCar.avgFuel * 100;

myCar.travel(230, 8);
