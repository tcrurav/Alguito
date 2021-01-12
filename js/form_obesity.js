window.onload = initialize;

function initialize(){
    var formObesity = document.getElementById("form-obesity");

    formObesity.addEventListener("submit", validateFormObesity);
}

function validateFormObesity(event){
    event.preventDefault();

    var formObesity = event.target;

    var error = false;

    var age = formObesity.age.value;
    if(!age || (age < 0 || age > 18)){
        error = true;
        document.getElementById("error-age").style.display = "block";
    } else {
        document.getElementById("error-age").style.display = "none";
    }

    var height = formObesity.height.value;
    if(!height || (height < 0 || height > 2.5)){
        error = true;
        document.getElementById("error-height").style.display = "block";
    } else {
        document.getElementById("error-height").style.display = "none";
    }

    var weight = formObesity.weight.value;
    if(!weight || (weight < 0 || weight > 150)){
        error = true;
        document.getElementById("error-weight").style.display = "block";
    } else {
        document.getElementById("error-weight").style.display = "none";
    }

    var sampleDate = formObesity["sample-date"].value;
    if(!sampleDate || sampleDate < new Date()){
        error = true;
        document.getElementById("error-sample-date").style.display = "block";
    } else {
        document.getElementById("error-sample-date").style.display = "none";
    }

    var sex = formObesity.sex.value;
    if(!sex){
        error = true;
        document.getElementById("error-sex").style.display = "block";
    } else {
        document.getElementById("error-sex").style.display = "none";
    }

    if(!error) pushObesityData(formObesity);
}

function pushObesityData(formObesity){
    var refObesity = firebase.database().ref().child("obesity");
    refObesity.push({
        age: formObesity.age.value,
        height: formObesity.height.value,
        weight: formObesity.weight.value,
        "sample-date": formObesity["sample-date"].value
    });

}