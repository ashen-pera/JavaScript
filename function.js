
function addNumber() {
    let firNum = parseFloat(document.getElementById('fNum').value);
    let secNum = parseFloat(document.getElementById('sNum').value);
    let Sum = firNum + secNum;
    document.getElementById('finalAnswer').innerHTML = "Final Answer is : " + Sum;
}

function main(x,y,z){
    return (x*y)+z;
}

console.log(main(10,20,30));