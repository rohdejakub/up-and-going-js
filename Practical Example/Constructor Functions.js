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
            console.log('Zabraknie ci paliwa! Maksymalny dystans to '  + myCar.maxDistance + 'km. Przejedziesz ten dystans z prędkością ' + speed + ' w czasie ' +  (myCar.maxDistance / speed).toFixed(2) + 'h.');
        }else{
        console.log('W czasie ' + time + 'h. Przejedziesz ' + speed * time + 'km.');
        };
    
    }
};
myCar.maxDistance = myCar.fuelTank / myCar.avgFuel * 100;

var Car = function(topSpeed , marka, fuelTank, avgFuel)
{
    this.topSpeed = topSpeed;
    this.marka =  marka;
    this.fuelTank = fuelTank;
    this.avgFuel = avgFuel;
    this.travel =  function(speed, time){
        if( speed > this.topSpeed ){
            speed = this.topSpeed;
        }
        let fuelUsed = (speed * time) / 100 * this.avgFuel;
        if( fuelUsed > this.fuelTank){
            console.log('Zabraknie ci paliwa! Maksymalny dystans to '  + this.maxDistance + 'km. Przejedziesz ten dystans z prędkością ' + speed + ' w czasie ' +  (this.maxDistance / speed).toFixed(2) + 'h.');
        }else{
        console.log('W czasie ' + time + 'h. Przejedziesz ' + speed * time + 'km.');
        };
    
    };
    this.maxDistance = this.fuelTank / this.avgFuel * 100;
}

var myCar2 = new Car(260 , 'Audi', 60 , 9);
var myCar3 = new Car(190 , 'VW', 45 , 13);

console.log(myCar3.travel(150 , 1));