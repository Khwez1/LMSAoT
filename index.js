let input1 = document.getElementById('base').value

let input2 = document.getElementById('height').value

let output = document.getElementById('AoT')

let btn = document.getElementById('calc')

function Area() {
    input1 = document.getElementById('base').value
    input2 = document.getElementById('height').value
    let answer = 0.5 * input1 * input2
    console.log(answer);
    output.value = answer
}
btn.addEventListener('click',Area)