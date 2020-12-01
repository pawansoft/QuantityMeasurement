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
                return expect(firstValue.compare(secondValue)).resolves.toEqual(true); 
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
            return expect(isEqual).resolves.toEqual(true)
        })
    })

    describe('Testing YARD', () => {
        test('ProvideLengthAs3_WhenConverted_ShouldReturnTrue', () =>{
            const firstValue = new Quantity(length.FOOT, 3);
            const secondValue = new Quantity(length.YARD, 1)
            const isEqual = firstValue.compare(secondValue);

            return expect(isEqual).resolves.toEqual(true);
        })
        test('ProvideLength_WhenNotEqual_ShouldReturnFalse', () => {
            const firstValue = new Quantity(length.FOOT, 1);
            const secondValue = new Quantity(length.YARD, 1);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toEqual(false);
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
            expect(isEqual).resolves.toEqual(true);
        })
        test('ProvideTwoLength_WhenBothEquals_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.INCH, 36);
            const secondValue = new Quantity(length.YARD, 1);
            const isEqual = firstValue.compare(secondValue);
            expect(isEqual).resolves.toEqual(true);
        })
        test('ProvideTwoLength_WhenEqualAfterConvert_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.YARD, 1);
            const secondValue = new Quantity(length.FOOT, 3);
            const isEqual = firstValue.compare(secondValue);
            expect(isEqual).resolves.toEqual(true);
        })
    })

    describe('TestInchToCM', () => {
        test('ProvideLengthInCMOrInch_WhenMatches_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.INCH, 2);
            const secondValue = new Quantity(length.CM, 5);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toEqual(true);
        })
    })

    describe('Adding Units', () => {
        test('ProvideNumber2,2_WhenAdded_ShouldReturn4Inch', () => {
            const firstValue = new Quantity(length.INCH, 2);
            const secondValue = new Quantity(length.INCH, 2);
            const sumOfUnit = firstValue.addQuantity(secondValue, length.INCH);
            return expect(sumOfUnit).resolves.toEqual(4);
        })
        test('Provide1FeetAnd2Inch_WhenSumIt_ShouldReturn14Inch', () => {
            const firstValue = new Quantity(length.FOOT, 1);
            const secondValue = new Quantity(length.INCH, 2);
            const sumOfUnit = firstValue.addQuantity(secondValue, length.INCH);
            return expect(sumOfUnit).resolves.toEqual(14);
        })
        test('Provide1Feet1Feet_WhenSumTheUnit_ShouldReturn24Inch', () => {
            const firstValue = new Quantity(length.FOOT, 1);
            const secondValue = new Quantity(length.FOOT, 1);
            const sumOfUnit = firstValue.addQuantity(secondValue, length.INCH);
            return expect(sumOfUnit).resolves.toEqual(24);
        })
        test('Provide2Inch2.2Cm_WhenSumUnits_ShouldReturn3Inch', () => {
            const firstValue = new Quantity(length.INCH, 2);
            const secondValue = new Quantity(length.CM, 2.5);
            const sumOfUnit = firstValue.addQuantity(secondValue, length.INCH);
            return expect(sumOfUnit).resolves.toEqual(3);
        })
    })

    describe('literToGallonTest',() => {
        test('Provide1Gallon_WhenConvertedToLiter_ShouldReturn3.78Liter', () => {
            const firstValue = new Quantity(length.GALLON, 1);
            const secondValue = new Quantity(length.LITER, 3.78);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toEqual(true)
        })

        test('Provide1LiterAnd1000Ml_WhenCompareTheUnit_ShouldReturnTrue', () => {
            const firstValue = new Quantity(length.MILLI_LITER, 1000);
            const secondValue = new Quantity(length.LITER, 1);
            const isEqual = firstValue.compare(secondValue);
            return expect(isEqual).resolves.toEqual(true)
        })
    })