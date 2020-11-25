class Temperature {
    constructor(cel) {
        this.celsius = cel;
    }
    convertCtoF() {
        return this.checkLimitCelsius()?(this.celsius*1.8+32):"Nhiet do khong dung";
    }
    convertCtoK(){
        if(this.checkLimitCelsius()){
            let k = this.celsius + 273.15;
            return k;
        }else {
            return "Nhiet do khong dung";
        }
    }
    checkLimitCelsius(){
        return (this.celsius > -273);
    }
}