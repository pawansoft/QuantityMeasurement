const quantityMeasurmentException = require('./QuantityMeasurmentException');
const exceptionType = require('../com.quantityMeasurment/exceptionType')

class Quantity{
    constructor(unit, value){
        this.unit = unit;
        this.value = value;
    }
    convert(unit, value){
        return unit * value;   
    }
    
    compare(that){
        return new Promise((resolve, rejects) => {
            try {
            
                let firstValue = this.convert(this.unit, this.value);
                let secondValue = this.convert(that.unit, that.value);
                if(this.value == null || this.value == undefined){
                    rejects()
                }
                    resolve(firstValue == secondValue)    
           
            } catch (e) {
                rejects( new quantityMeasurmentException('Null or undefined', exceptionType.NULL_POINTER))
                    
            }

        })
    }
}

module.exports = Quantity;