
function addNumber() {
    let firNum = document.getElementById('fNum').value;
    let secNum = document.getElementById('sNum').value;
    let Sum = firNum + secNum;
    document.getElementById('finalAnswer').innerHTML = "Final Answer is : " + Sum;
}