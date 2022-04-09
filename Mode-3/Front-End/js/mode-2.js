/* -------------------------------------------------------------------------- */
/*                             SELECTING ELEMENTS                             */
/* -------------------------------------------------------------------------- */


const grid = document.querySelector('.word-tray .grid-container');
const sentenceTiles = document.querySelector('#user-sentence .sentence-tiles');
const senderSentenceTiles = document.querySelector('#sender-sentence .sentence-tiles');
const wordTileTemplate = document.querySelector('#word-tile-template');
const categoryTiles = document.querySelectorAll('.category-tile');

const speakButton = document.querySelector('.speak-btn');
const clearButton = document.querySelector('.clear-btn');

let sentence = [];

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

function getWordInfo(requiredWord){
    for( let cat in words){
        let res = words[cat].filter( word => word.text == requiredWord);

        if( res.length != 0){
            return {word : res[0], category : cat };
        }
    }
    return {word : { text : "dummy", icon : "https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png"}, category : "time"}
}

function textToSpeech(text){
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

function addTileToSentence(tileElement){
    if( sentence.length >= 7){
        return;
    }
    let tile = tileElement.cloneNode(true);
    let wordText = tile.querySelector('span').textContent.toLowerCase();

    let wordObj = {
        word : wordText,
        icon : tile.querySelector('img').src
    }

    sentence.push(wordObj);

    textToSpeech(wordText);

    sentenceTiles.appendChild(tile);

    transmitMessage(JSON.stringify([wordObj]));
}



function renderSenderSentence(msg){
    senderSentenceTiles.innerHTML = "";
    let senderSentence = "";
    let senderWords = JSON.parse(msg);

    //console.log("rendering : ", msg);

    for(let senderWord of senderWords){

        //console.log("testing for word :", senderWord);

        let { word, category } = getWordInfo(senderWord.word);

        let tile = renderWordTile(word, category);

        //console.log("tile element : ", tile);
        senderSentence += " " + senderWord.word;
        senderSentenceTiles.appendChild(tile);
    }

    textToSpeech(senderSentence);
}

function speakSentence(){
    if( sentence.length == 0 )
        return;
    
    let sentenceText = "";
    for(let ele of sentence){
        sentenceText += " " + ele.word;
    }

    textToSpeech(sentenceText);
    transmitMessage(JSON.stringify(sentence));
}

function clearSentence(){
    sentenceTiles.innerHTML = "";
    sentence = [];
}

function clearActiveCategoryTiles(){
    for( let tile of categoryTiles){
        tile.classList.remove('active');
    }
}



function renderWordTile(word, category){
    let tile = wordTileTemplate.content.cloneNode(true);

    tile.querySelector('img').src = IMG_LINK_PREFIX + word.icon;
    tile.querySelector('span').textContent = word.text;
    
    tile.querySelector('div.word-tile').classList.add(category);

    return tile.querySelector('div.word-tile');
}

function renderWordTray(requiredCategory){
    grid.innerHTML = "";
    let requiredCategories;
    if( requiredCategory == 'default' ){
        requiredCategories = ["yes", "no", "greeting", "pronoun", "time"];
    }
    else{
        requiredCategories = [requiredCategory];
    }

    for(let cat of requiredCategories){
        for(let word of words[cat]){
            let tile = renderWordTile(word, cat);

            tile.addEventListener('click', (e) => {
                handleWordTileClick(e.currentTarget);
            });

            grid.appendChild(tile);
        }
    }
}

function handleWordTileClick(currTile){
    addTileToSentence(currTile);
}

function handleCategoryTileClick(currTile){

    if( currTile.classList.contains('active')){
        currTile.classList.remove('active');
        renderWordTray('default');
        return
    }

    clearActiveCategoryTiles();

    currTile.classList.add('active');

    renderWordTray(currTile.id);
}


/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */


categoryTiles.forEach( (tile) => {
    tile.addEventListener('click', (e) => {
        handleCategoryTileClick(e.currentTarget);
    });
});

speakButton.addEventListener('click', () => { speakSentence() });
clearButton.addEventListener('click', () => { clearSentence() });


/* -------------------------------------------------------------------------- */
/*                                MAIN FUNCTION                               */
/* -------------------------------------------------------------------------- */

window.onload = () => {
    renderWordTray('default');
}
