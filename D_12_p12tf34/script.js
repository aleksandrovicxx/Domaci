let dan = {
    temperature: [2, 3, 4, 2, 5, 3, 4],
    kiša: false,
    oblačno: true,
    sunčano: false,
    zadatak1: function () {
        let tropskiDan = true;
        this.temperature.forEach(t => {
            if (t < 24){
                tropskiDan = false;
            }
        });
        return tropskiDan;
    },
    zadatak2: function (){
        let danneobičan = false
        this.temperature.forEach(t => {
            if (t < -5 && this.kiša == true){
                danneobičan = true;
            } else if (t > 25 && this.oblačno == true){
                danneobičan = true;
            } else if (this.kiša == true && this.oblačno == true && this.sunčano == true){
                danneobičan = true;
            }
        })
        return danneobičan;
        
    }
}

console.log(dan.zadatak1());
console.log(dan.zadatak2());
