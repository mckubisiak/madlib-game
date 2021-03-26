// import functions and grab DOM elements

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const button = document.getElementById('button');
const output1 = document.getElementById('noun1');
const output4 = document.getElementById('noun1');
const output5 = document.getElementById('noun1');
const output2 = document.getElementById('verb1');
const output3 = document.getElementById('noun2');

 
button.addEventListener('click', () => {
    output1.textContent = input1.value;
    output3.textContent = input1.value;
    output2.textContent = input2.value;
    const div = document.getElementById('story');
    div.classList.remove('hidden');

});



// initialize state

// set event listeners to update state and DOM