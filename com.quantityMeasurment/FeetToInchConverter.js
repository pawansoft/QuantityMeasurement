function feetToInchConverter(feet, inch){
    if(feet*12 == inch){
        return true;
    }
    else {
        return false
    }
}

module.exports = feetToInchConverter;