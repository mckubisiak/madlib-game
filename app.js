//Array of DOM Element input and output tag objects
const madlibs = [
    {
        inTag: 'input1',
        outTag: 'adj1'
    },
    {
        inTag: 'input2',
        outTag: 'noun2'
    },
    {
        inTag: 'input3',
        outTag: 'location3'
    },
    {
        inTag: 'input4',
        outTag: 'noun4'
    },
    {
        inTag: 'input5',
        outTag: 'verb5'
    },
    {
        inTag: 'input6',
        outTag: 'verb6'
    },
    {
        inTag: 'input7',
        outTag: 'adj7'
    }
];

//functions
function sync(inTag, outTag) {
    // declare variables and fill with elements using tag arguments
    const in1 = document.getElementById(inTag);
    const out1 = document.getElementById(outTag);
    //replace the story span with the input value
    out1.textContent = in1.value;
    // in1.value = '';
}  

function init(arr) {
    //for each object in the array
    for (let i = 0; i < arr.length; i++) {
        //assign the object to a variable
        const obj = arr[i];
        //run sync function with the tags in that object
        sync(obj.inTag, obj.outTag);
    }
}

function swapDisplay(div1, div2) {
    //remove hidden class, making this div visible
    div1.classList.remove('hidden');
    //add hidden class, making this div invisible
    div2.classList.add('hidden');
}

//div elements to hide or unhide
const divStory = document.getElementById('story');
const divInput = document.getElementById('inputs');

//declare button elements to create event listeners
const buttonInput = document.getElementById('button-input');
const buttonReset = document.getElementById('button-reset');

// set event listener to sync inputs to story outputs - displays story, hiding inputs
buttonInput.addEventListener('click', () => {
    init(madlibs);
    swapDisplay(divStory, divInput);
});        

// set event listener to swap the display back to inputs, hiding the story
buttonReset.addEventListener('click', () => {
    swapDisplay(divInput, divStory);
});