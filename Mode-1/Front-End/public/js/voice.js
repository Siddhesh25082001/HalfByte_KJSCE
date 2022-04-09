
var isBrowserSupported;
if ("webkitSpeechRecognition" in window) {
    isBrowserSupported = true;
} else {
    alert('Browser does not supports speech recognition');
}

// window.onload = function () {
//     if (isBrowserSupported) {
//         if (localStorage.getItem("voiceConnected") === null) {
//             localStorage.setItem("voiceConnected", true);
//             let speech = new SpeechSynthesisUtterance();
//             speech.text = "Voice Connected";
//             window.speechSynthesis.speak(speech);
//         }
//     }
// }

if (isBrowserSupported) {

    // Creating speech recognition object
    let recognition = new webkitSpeechRecognition();
    let speech = new SpeechSynthesisUtterance();

    // window.speechSynthesis.speak(speech);
    recognition.interimResults = true;

    recognition.onstart = () => {
        if (localStorage.getItem("voiceConnected") === null) {
            localStorage.setItem("voiceConnected", true);
            let speech = new SpeechSynthesisUtterance();
            speech.text = "Voice Connected";
            window.speechSynthesis.speak(speech);
        }
        // speech.text = "Voice Connected";
        // window.speechSynthesis.speak(speech);
        console.log('Voice is activated');
    }

    recognition.onresult = (e) => {
        let text = Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
        if (e.results[0].isFinal) {
            text = text.toLowerCase();
            console.log(text);
            if (text.includes("jarvis") || text.includes("jervis") || text.includes("service") ||
            text.includes("javascript")) {
                // Click On create
                if (text.includes("click") && text.includes("create") || text.includes("concrete")) {
                    console.log("Inside click on create");
                    speech.text = "Clicked on create button";
                    window.speechSynthesis.speak(speech);
                    window.location.href = "/createRoom";
                   // window.location.href =" https://test-deploy-mode-1.herokuapp.com/createRoom";
                    
                }

                if (text.includes("create") && text.includes("room") || text.includes("creator") && text.includes("room")) {
                    console.log("Inside create room");
                    const copyText = document.getElementById("roomId");
                    //console.log(copyText.value)
                    speech.text = "Room created successfully";
                    window.speechSynthesis.speak(speech);
                    window.location.href = `/info/${copyText.value}`;
                
                }

                 if(text.includes("submit")){
                     console.log("Inside submit form");
                     const submit = document.getElementById('submit-info');
                     submit.click();
                     speech.text = "Entered Into Meeting";
                     window.speechSynthesis.speak(speech);
                 }

                 if(text.includes("select") && text.includes("mod") || text.includes("mode")){
                    console.log("Inside choose mode");
                    const mode = document.getElementById('mode-dropdown');
                    mode.value = '1';
                    speech.text = "Mode 1 selected";
                    window.speechSynthesis.speak(speech);
                 }

                if(text.includes("home") || text.includes("return")){
                    console.log("Inside home page");
                    
                    speech.text = "Returned to home page";
                    window.speechSynthesis.speak(speech);
                   //window.location.href = "https://test-deploy-mode-1.herokuapp.com";
                   window.location.href = "/";
                   
                }

            }
            // else {
            //     console.log("jarvis bolo pehle")
            // }
        }
    }

    recognition.onend = () => {
        console.log('Voice is deactivated');
        recognition.start();
    }

    recognition.start();
    
}

