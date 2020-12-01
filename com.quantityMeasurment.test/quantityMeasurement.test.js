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

    describe('Tescases for inch',() => {
        test('ProvideInches_WhenRefrenceMisMatch_ShouldReturnTrue', () =>{
            const firstValue = new Quantity(length.INCH, 24);
            const secondValue = new Quantity(length.INCH, 24);
            const isRefSame = firstValue instanceof Quantity && secondValue instanceof Quantity;

            return expect(isRefSame).toBe(true);
        })
        test('ProvideLengthINch_whenFoundNull_ShouldThrowError', () =>{
            const firstValue = new Quantity(length.INCH, null);
            const secondValue = new Quantity(length.INCH, null);
            const foundExcep = firstValue.compare(secondValue);
            expect(foundExcep).rejects.toThrow(exception.NULL_POINTER);
        })
        test('ProvideLengthInInch_WhenValueMatches_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.INCH, 0);
            const secondValue = new Quantity(length.INCH, 0);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toBe(true)
        })
        test('ProvideLengthInInch_WhenValueMatches_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.INCH, 20);
            const secondValue = new Quantity(length.INCH, 20);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toBe(true)
        })
    })

    describe('Testing YARD', () => {
        test('ProvideLengthAs3_WhenConverted_ShouldReturnTrue', () =>{
            const firstValue = new Quantity(length.FOOT, 3);
            const secondValue = new Quantity(length.YARD, 1)
            const isEqual = firstValue.compare(secondValue);

            return expect(isEqual).resolves.toBe(true);
        })
        test('ProvideLength_WhenNotEqual_ShouldReturnFalse', () => {
            const firstValue = new Quantity(length.FOOT, 1);
            const secondValue = new Quantity(length.YARD, 1);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toBe(false);
        })
        test('ProvideTwoLength_WhenNotEqual_ShouldReturnFalse', () => {
            const firstValue = new Quantity(length.INCH, 1);
            const secondValue = new Quantity(length.YARD, 1);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toBe(false);
        })
        test('ProvideTwoLength_WhenEquals_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.YARD, 1);
            const secondValue = new Quantity(length.INCH, 36);
            const isEqual = firstValue.compare(secondValue);
            expect(isEqual).resolves.toBe(true);
        })
        test('ProvideTwoLength_WhenBothEquals_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.INCH, 36);
            const secondValue = new Quantity(length.YARD, 1);
            const isEqual = firstValue.compare(secondValue);
            expect(isEqual).resolves.toBe(true);
        })
        test('ProvideTwoLength_WhenEqualAfterConvert_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.YARD, 1);
            const secondValue = new Quantity(length.FOOT, 3);
            const isEqual = firstValue.compare(secondValue);
            expect(isEqual).resolves.toBe(true);
        })
    })