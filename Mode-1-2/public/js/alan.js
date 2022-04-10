
 // Client app
 var alanBtnInstance = alanBtn({
   key: "c96f92eb11549547cc340cefa11376ed2e956eca572e1d8b807a3e2338fdd0dc/stage",
   onCommand: function (commandData) {
     if (commandData.command === "click-on-create") {
         window.location.href = "/createRoom";
     }

     if(commandData.command === "create-room"){
        const copyText = document.getElementById("roomId");
        window.location.href = `/info/${copyText.value}`;
     }

     if(commandData.command === "select-mode"){
       const mode = document.getElementById('mode-dropdown');
       mode.value = '1';
     }

     if(commandData.command === "click-on-submit"){
      const submit = document.getElementById('submit-info');
      submit.click();
     }

     if(commandData.command === "return-home"){
      window.location.href = "/";
    }


   },
   rootEl: document.getElementById("alan-btn"),
 });