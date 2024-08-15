const fetchAmount = async () => {
    let fromCurr = document.getElementById("fromcurr").value;
    let toCurr = document.getElementById("tocurr").value;
    let amount = document.getElementById("currAmount").value;

    // api call
    let response = await fetch(`https://v6.exchangerate-api.com/v6/683d04979ffb7fcfec743b0c/latest/${fromCurr}`);
    if(!response.ok) throw new Error("Network Error");

    let jsonRes = await response.json();
    // console.log(jsonRes.conversion_rates);


if(fromCurr == toCurr){
alert("From and to values cannot be same !")
}else{
    findCurrencyByRate(toCurr , jsonRes.conversion_rates , amount);

}



}

const findCurrencyByRate = (toCurr , conversionRate , amount) => {

if(conversionRate.hasOwnProperty(toCurr)){
    
    document.getElementById("convertedCurrency").textContent = (amount * conversionRate[toCurr]).toFixed(3);
}

}