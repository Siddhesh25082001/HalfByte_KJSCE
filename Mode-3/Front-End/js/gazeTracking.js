const HOVER_THRESHOLD = 10

window.saveDataAcrossSessions = true;

hoverCount = {}

webgazer.setGazeListener( (data, elapsedTime) => {
    if (data == null) {
        return;
    }
    var xpred = data.x;
    var ypred = data.y;
    // console.log(xpred, " , ", ypred, " time : ", elapsedTime);

    const target = document.elementFromPoint(xpred, ypred);

    if( !target || !target.classList.contains('gaze') || target.classList.contains('active') || SCANNING)
        return

    const targetId = target.id;
    if( !hoverCount[targetId] )
        hoverCount[targetId] = 0;

    hoverCount[targetId]++;

    if( hoverCount[targetId] > HOVER_THRESHOLD ){
        target.click();
        hoverCount = {};
    }
})
.saveDataAcrossSessions(true)
.begin();

function debugClick(btn){
    userSentence.value = btn.id;
}