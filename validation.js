function validation() {
let phone = document.getElementById("num").value;

let numLength = phone.length;
let firstNums = phone.substr(0,2);
let num;
let lastNums = phone.substr(numLength-9, 9)

if (numLength < 9){
    alert("Numbers Missing! Please check again...")
    document.getElementById("msg").innerHTML = "Invalide Number"
} else if(numLength == 9) {
    alert("Number Validation Successful!")
    num = "+94"+ phone;
    document.getElementById("msg").innerHTML = num;
} else if (numLength == 10) {
    alert("Number Validation Successful!")
    num = "+94" + lastNums;
    document.getElementById("msg").innerHTML = num;
}
// console.log(lastNums);
}

