const keys = document.querySelectorAll( '.key ');

let audio = new Audio();

const playTune = ( key ) => {
    audio.src = `./src/audios/${ key }.wav`;
    audio.play();
};

keys.forEach( ( key ) => {
    key.addEventListener( 'click', () => {
        playTune( key.dataset.key );
    });
});

document.addEventListener( 'keydown', ( e ) => {
    playTune( e.key );
});