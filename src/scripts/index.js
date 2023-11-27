const keys = document.querySelectorAll( '.key ');
const volumeSlider = document.querySelector( '.volume-slider input' );
const keysCheck = document.querySelector( '.keys-check input' );

let mapedKeys = [];
let audio = new Audio();

const playTune = ( key ) => {
    audio.src = `./src/audios/${ key }.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout( () => {
        clickedKey.classList.remove('active');
    }, 150 );
};

const handleVolume = ( e ) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    keys.forEach( ( key ) => {
        key.classList.toggle( 'hide' );
    });
};

keys.forEach( ( key ) => {
    key.addEventListener( 'click', () => {
        playTune( key.dataset.key );
        mapedKeys.push( key.dataset.key );
    });
});

document.addEventListener( 'keydown', ( e ) => {
    if( mapedKeys.includes( e.key ) ){
        playTune( e.key );
    }
});

volumeSlider.addEventListener( 'input', handleVolume );

keysCheck.addEventListener( 'click', showHideKeys );