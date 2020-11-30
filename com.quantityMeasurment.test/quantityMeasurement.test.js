const feetToInchConverter = require('../com.quantityMeasurment/FeetToInchConverter')

 test('providefilelocation_whenNumberOfRecodeMatch_TestShouldPass', () =>{
    const isEqual = feetToInchConverter(1, 12);
    return expect(isEqual).toBe(true); 
});