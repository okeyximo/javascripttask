function convertFahrToCelsius(Fahr) {
    if ((isNaN(Fahr))){
        return `${Fahr} is not a valid number but a/an ${typeof(Fahr)}.`
    }
    else{
        let C = (Fahr - 32) * 5/9;
        return C.toFixed(4);
    }
    
   }
    
console.log(convertFahrToCelsius(30));
