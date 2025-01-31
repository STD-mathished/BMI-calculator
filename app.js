function bmi() {
    let s1 = document.querySelector("#weight");
    let s2 = document.querySelector("#height")


    let weight = s1.value;
    let height = s2.value;
    let bmi = Math.round(weight / (height * height));
    
    checkBmi(bmi);

}

function checkBmi(bmi){
    if(bmi < 18.5)
    {
        alert("You are underweight");
    }
    else if(bmi < 24.9)
    {
        alert("You have a normal weight");
    }
    else if(bmi < 29.9)
    {
        alert("You are overweight");
    }
    else if(bmi > 30)
    {
        alert("You are obese");
    }
}


function bmx() {
    let s1 = document.querySelector("#weight");
    let s2 = document.querySelector("#height")


    let weight = s1.value;
    let height = s2.value;
    let bmi = Math.round(weight / (height * height));

    let bmiDiv = document.querySelector("#bmi");
    let input = document.createElement("input");

    input.value = bmi;
    bmiDiv.appendChild(input);
    // adding a comment
}

