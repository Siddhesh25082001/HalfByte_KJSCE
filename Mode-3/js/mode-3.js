/* -------------------------------------------------------------------------- */
/*                             SELECTING ELEMENTS                             */
/* -------------------------------------------------------------------------- */

const bigButtonGrid = document.querySelector('.big-btn-grid-container');
const wordTilesGrid = document.querySelector('.word-tiles-grid-container');

const userSentence = document.querySelector('#user-sentence');

const bigBtns = document.querySelectorAll('.big-btn');

const yesButton = document.querySelector('#yes-btn');
const noButton = document.querySelector('#no-btn');
const speakButton = document.querySelector('#speak-btn');
const cancelButton = document.querySelector('#cancel-btn');

const wordsButton = document.querySelector('#words-btn');
const alphabetsButton = document.querySelector('#alphabets-btn');
const emojisButton = document.querySelector('#emojis-btn');
const greetingsButton = document.querySelector('#greetings-btn');

const cursor = document.querySelector('.cursor');


/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

/* --------------- dummy transmit -------------- */
function transmitMessage(msg){
    console.log("transmitted msg : ", msg);
}

let msg = new SpeechSynthesisUtterance();

function textToSpeech(text){
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

function addToSentence(word){
    userSentence.value += word + " ";
    textToSpeech(word);
}

function speakSentence(){
    let sentence = userSentence.value;

    if( !sentence )
        return;

    userSentence.classList.add('reading');

    textToSpeech(sentence);
    transmitMessage(sentence);

    setTimeout( () => {
        userSentence.classList.remove('reading');
        userSentence.value = "";
    }, 1000);
}

function clearSentence(){
    userSentence.value = "";
}

function clearCursor(){
    let ele = wordTilesGrid.querySelector('.word-tile div.cursor')
    if(ele){
        ele.parentElement.classList.remove('active');
        ele.parentElement.removeChild(ele);
    } 
}

function renderWordTray(category){
    wordTilesGrid.innerHTML = "";
    let arr = words[category];

    if( category == "emojis"){
        for(let word of arr){
            let tile = document.createElement('div');
            tile.classList = ['word-tile']

            let icon = document.createElement('i');
            icon.classList = [`fa-solid fa-${word}`];

            tile.appendChild(icon);

            tile.addEventListener('click', (e) => {
                addToSentence(tile.textContent.toLowerCase());
            })

            wordTilesGrid.appendChild(tile);
        }
    }
    else{
        for(let word of arr){
            let tile = document.createElement('div');
            tile.classList = ['word-tile']
    
            tile.textContent = word;
    
    
            tile.addEventListener('click', (e) => {
                addToSentence(tile.textContent.toLowerCase());
            })
    
            wordTilesGrid.appendChild(tile);
        }
    }
}




/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

function triggerButton(btnId){
    if( btnId == "yes-btn"){
        textToSpeech("yes");
        transmitMessage("yes");
    }
    else if( btnId == "no-btn"){
        textToSpeech("no");
        transmitMessage("no");
    }
    else if( btnId == "speak-btn"){
        speakSentence();
    }
    else if( btnId == "cancel-btn"){
        clearSentence();
    }
    else if( btnId == "words-btn"){
        renderWordTray('default');
    }
    else if( btnId == "alphabets-btn"){
        renderWordTray('alphabets');
    }
    else if( btnId == "emojis-btn"){
        renderWordTray('emojis');
    }
    else if( btnId == "greetings-btn"){
        renderWordTray('greetings');
    }
}

bigBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        bigBtns.forEach( (btn) => {
            if( btn.classList.contains('active')){
                btn.classList.remove('active');
            }
            let loading = btn.querySelector('.loading')
            if( loading ){
                btn.removeChild(loading);
            }
        });

        e.currentTarget.classList.add('active');
        animateLoading(e.currentTarget);
    })
})



/* -------------------------------------------------------------------------- */
/*                                  ANIMATION                                 */
/* -------------------------------------------------------------------------- */
const MS_PER_TILE = 2000;
const LOADING_TIME_IN_MS = 700;
let SCANNING = false;
let BLINKED = false;
let activeButtonId = "";

function animateCursor(tiles, idx){
    let id = null;

    let tile = tiles[idx];
    console.log(tile);
    const speed = (MS_PER_TILE / 90).toFixed();

    let cursor = document.createElement('div');
    cursor.classList = ['cursor'];

    tile.appendChild(cursor);
    tile.classList.add('active');

    let left = 0;
    clearInterval(id);
    id = setInterval(frame, speed);
    function frame() {
        if (left == 90) {
            clearInterval(id);
            tile.removeChild( tile.querySelector('.cursor'));
            tile.classList.remove('active');

            if( idx <= tiles.length - 1){
                animateCursor(tiles, idx+1);
            }
            else{
                return;
            }
        }
        else {
            if( BLINKED ){
                BLINKED = false;
                clearInterval(id);
                console.log("target tile : ", tile.textContent);
                tile.click();
                tile.removeChild( tile.querySelector('.cursor'));
                tile.classList.remove('active');

                return;
            }
            left++;
            cursor.style.left = left + "%";
        }
    }
}

function startAnimation(){
    BLINKED = false;
    SCANNING = true;
    clearCursor();
    let tiles = wordTilesGrid.querySelectorAll('.word-tile');
    animateCursor(tiles, 0);

    SCANNING = false;
}

function animateLoading(btn){
    let id = null;

    let speed = (LOADING_TIME_IN_MS / 100).toFixed();
    let size = 0;

    let loading = document.createElement('div');
    loading.classList = ['loading'];

    loading.style.height = "1%";
    loading.style.width = "1%";

    btn.appendChild(loading);

    clearInterval(id);
    id = setInterval(frame, speed);
    function frame() {
        if( !btn.classList.contains('active') ){
            clearInterval(id);
            btn.removeChild(loading);
            return;
        }

        if (size === 100) {
            clearInterval(id);
            console.log('button clicked : ', btn.id);
            triggerButton(btn.id);
        }
        else{
            size++;
            loading.style.height = size + "%";
            loading.style.width = size + "%";
        }
    }
}


//dummy triggers
document.addEventListener('keyup', (e) => {
    if (e.key == " " || e.code == "Space") {
        console.log("blinked");
        BLINKED = true;
    }

    if(e.key == "Enter" || e.code == "Enter"){
        setTimeout( startAnimation, 1000);
    }
});


/* -------------------------------------------------------------------------- */
/*                                MAIN FUNCTION                               */
/* -------------------------------------------------------------------------- */

window.onload = () => {
    renderWordTray('default');
    animateLoading(document.querySelector('#yes-btn'));
}
