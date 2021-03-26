// import functions and grab DOM elements

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('button');
const output1 = document.getElementById('noun1');
const output2 = document.getElementById('verb1');
const output3 = document.getElementById('noun2');

 
button.addEventListener('click', () => {
    output1.textContent = input1.value;
    output3.textContent = input1.value;
    output2.textContent = input2.value;

});



// initialize state

// set event listeners to update state and DOM