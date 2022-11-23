let $root = document.querySelector(".root");
let $select = document.createElement("select");

let optionArray = ["Web Developer", "Android Developer", "IOS Developer", "Backend Developer"];

optionArray.forEach((item) => {
    let $option = document.createElement("option");
    $option.innerHTML = item;
    $option.value = item.split('')[0];
    
});