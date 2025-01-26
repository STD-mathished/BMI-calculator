function bmi() {
    let s1 = document.querySelector("#weight");
    let s2 = document.querySelector("#height")


    let weight = s1.value;
    let height = s2.value;

    let bmi = weight / (height * height);

    alert(Math.round(bmi));

}


