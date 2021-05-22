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

function checkYuGiOh(n){
    let arr = [];
    let i = 1;
    while(i<=n){
        if(i%2==0 && i%3==0){
            arr.push("yu-gi");
        }
        
        else if(i%2==0 && i%5==0){
            arr.push("yu-oh");
        }
        else if(i%3==0 && i%5==0){
            arr.push("gi-oh");
        }
        else if(i%2==0 && i%3==0 & i%5==0){
            arr.push("yu-gi-oh");
        }
        if(i%2==0){
            arr.push("yu");
        }
        else if(i%3==0){
            arr.push("gi");
        }
        else if (i%5==0){
            arr.push("oh");
        }
        else{
            arr.push(i);
        }
        i++;
    }
        

return arr; 
}


console.log(checkYuGiOh(10))