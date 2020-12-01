const Quantity = require('../com.quantityMeasurment/Quantity');
const length = require('../com.quantityMeasurment/Unit');
const exception = require('../com.quantityMeasurment/exceptionType')

    describe('CompareLength', () =>{    
        
        test('ProvideLength_WhenFootConvertedInINch_ShouldCompareTwoValue', () =>{
            const firstValue = new Quantity(length.FOOT, 0.0);
            const secondValue = new Quantity(length.FOOT, 0.0)
            return expect(firstValue.compare(secondValue)).resolves.toBe(true); 
        });

        test('ProvideLength_WhenFootConvertedInINch_ShouldCompareTwoValue', () =>{
                const firstValue = new Quantity(length.INCH, 12);
                const secondValue = new Quantity(length.FOOT, 1)
                return expect(firstValue.compare(secondValue)).resolves.toBe(true); 
            });
        
        test('ProvideLengthAsNull_WhenFootConvertedInINch_ShouldThrowNullException', () =>{
            const firstValue = new Quantity(length.FOOT, null);
            const secondValue = new Quantity(length.FOOT, null);
            const isEqual = firstValue.compare(secondValue);
            expect(isEqual).rejects.toThrow(exception.NULL_POINTER)
        });

        test('ProvideValue_WhenValueIsNotNumeric_ShouldThrowException', () =>{
            const firstValue = new Quantity(length.INCH, 24);
            const secondValue = new Quantity(length.FOOT, 2);
            let isRefSame = firstValue instanceof Quantity && secondValue instanceof Quantity;
            
            return expect(isRefSame).toBe(true); 
        });       
         
    });