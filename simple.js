function eConsumed() {
    let voltage = document.getElementById("vol").value;
    let resistance = document.getElementById("res").value;

    if (voltage == "" || resistance == "") {
        window.alert("Please input a value.");
        return false;
    } else {
        let num1 = voltage * voltage;
        let num2 = num1/resistance;

        document.getElementById("power").innerHTML = num2.toFixed(2) + " Watts (W)";
    }    
}