//creates array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//loops for each sound in the array
sounds.forEach((sound) => {
    //creates a button
    const btn = document.createElement('button');
    //add class of 'btn' to button element
    btn.classList.add('btn');
    //inner text from sound array
    btn.innerText = sound;
    //add button to the DOM
    document.getElementById('buttons').appendChild(btn);
});
