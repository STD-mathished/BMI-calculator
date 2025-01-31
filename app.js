function bmi() {
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let bmi = 0;
    let result = document.querySelector("#result");
    if(weight != 0 && height != 0)
    {
        bmi = weight / Math.pow(height/100, 2);
    }
    result.value = bmi;
    chekcbmi(bmi);

}

function chekcbmi (bmi) {
    let resultDiv = document.querySelector("#down");
    let result = document.createElement("p");
    if(bmi < 18.5)
    {
        //poids insuffisant
        result.innerText = "You are underweight";
    }
    else if (bmi < 24.9)
    {
        //poids normal
        result.innerText = "You are normal";
    }
    else if (bmi < 29.9)
    {
        // excès pondéral, surpoids
        result.innerText = "You are overweight";
    }
    else if(bmi < 39.9)
    {
        //obésité
        result.innerText = "You are obese";
    }
    else if (bmi > 40)
    {
        // obésité morbide
        result.innerText = "You suffer from morbid obesity";
    }
    resultDiv.appendChild(result);

}