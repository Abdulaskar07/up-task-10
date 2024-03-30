function Calculate(){
    var p = parseInt(document.getElementById("principle").value);
    var r = parseInt(document.getElementById("Intrest").value);
    var y = parseInt(document.getElementById("years").value);

    let result = p*(Math.pow((1+r/100),y));
    console.log(result.toFixed(2));
    document.getElementById("result").innerHTML = `${result.toFixed(2)}`;

    document.getElementById("Profit").innerHTML =`${(result-p).toFixed(2)}`

}