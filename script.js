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

    //add event listener to button, listens for click event
    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });
    
    //add button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

//function to stop sounds so that they don't overlap when clicked
function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}