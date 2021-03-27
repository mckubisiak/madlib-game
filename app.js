// import functions and grab DOM elements

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const button = document.getElementById('button');
const output1 = document.getElementById('adj1');
const output2 = document.getElementById('noun2');
const output3 = document.getElementById('location3');
const output4 = document.getElementById('noun4');
const output5 = document.getElementById('verb5');
const output6 = document.getElementById('verb6');
const output7 = document.getElementById('adj7');

 
button.addEventListener('click', () => {
    output1.textContent = input1.value;
    output2.textContent = input2.value;
    output3.textContent = input3.value;
    output4.textContent = input4.value;
    output5.textContent = input5.value;
    output6.textContent = input6.value;
    output7.textContent = input7.value;
    const div = document.getElementById('story');
    div.classList.remove('hidden');

});



// initialize state

// set event listeners to update state and DOM