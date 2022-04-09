   
if (annyang) {
    var commands = {

        // Home Page Commands
        'Click on create': function(){
            window.location.href = "http://localhost:8000/createRoom"
            // const create = document.getElementById('createRoom');
            // create.click();
        },

        'Click On Join': function(){
            window.location.href = "http://localhost:8000/joinRoom"
        },

        'Go to home': function(){
            window.location.href = "http://localhost:8000/"
        },
        
        // Create Room command
        'Create Room': function(){
            const copyText = document.getElementById("roomId");
            console.log(copyText.value)
            window.location.href = `/info/${copyText.value}`
        },

        // Submit form commands
        'Enter First Name *name': function(data){
            const fname = document.getElementById("fname");
            fname.value = data.split(' ').join('');
        },
        'Clear First Name': function(){
            const fname = document.getElementById("fname");
            fname.value = "";
        },

        'Enter Last Name *name': function(data){
            const lname = document.getElementById("lname");
            lname.value = data.split(' ').join("");
        },

        'Clear Last Name': function(){
            const lname = document.getElementById("lname");
            lname.value = "";
        },

        'Enter Email *email': function(data){
            const email = document.getElementById('email');
            data = data.toLowerCase();
            data = data.split(' ').join('');
            email.value = data.replace("attherate","@");
            
        },

        'Clear Email': function(){
            const lname = document.getElementById("email");
            lname.value = "";
        },

        'Enter Contact Number *phone': function(data){
            const phone = document.getElementById('phone');
            phone.value = data.split(' ').join('');
        },

        'Clear Contact Number': function(){
            const lname = document.getElementById("phone");
            lname.value = "";
        },

        'Enter Nickname *nickname': function(data){
            const nickname = document.getElementById('nname');
            nickname.value = data.split(' ').join('');
        },

        'Clear Nickname': function(){
            const nname = document.getElementById("nname");
            nname.value = "";
        },

        'Open Dropdown': function(){
             console.log('Dropdown');
            // $('#mode-dropdown').trigger("click");
             const dropdown = document.getElementById("mode-dropdown");
             console.log(dropdown);
             dropdown.click();
        },
        'Choose Mode *mode':function(mode){
            const dropdown = document.getElementById('mode-dropdown');
            console.log(mode)
            if(mode === "1" || mode === "one" || mode === "O") dropdown.value = '1';
            else if(mode === "2") dropdown.value = '2';
            else if(mode === "3") dropdown.value = '3';
            else if(mode === "4") dropdown.value = '4';
            else dropdown.value = '1';
        },

        'Click On Submit': function(){
            const submit = document.getElementById('submit-info');
            submit.click();
        },

        'On Video': function(){
            const video = document.getElementById('videoOption');
            video.click();
        },
        'Off Video': function(){
            //console.log("hello");
            const video = document.getElementById('videoOption');
            //console.log(video);
            video.click();
        },
        'Unmute': function(){
            const audio = document.getElementById('audioOption');
            audio.click();
        },
        'Mute': function(){
            const audio = document.getElementById('audioOption');
            audio.click();
        },
        'Show Participants': function(){
            const participants = document.getElementById('participants');
            participants.click();
        },
        'Show Chat':function(){
            const chat = document.getElementById('room-chat');
            chat.click();
        },
        'Leave Meeting': function(){
            const leave = document.getElementById('leaveMeeting');
            leave.click();
        },
        'Share Link':function(){
            // receiver_email = receiver_email.toLowerCase();
            // receiver_email = receiver_email.split(' ').join('');
            // receiver_email = receiver_email.replace("attherate","@");
            // console.log(receiver_email);
            const roomId = document.getElementById('roomId');
            console.log("Share Link");
            const link = `http://localhost:8000/joinRoom/${roomId.value}`;
            Email.send({
            Host: "smtp.elasticemail.com",
            Port:2525,
            Username : "shettyrohit268@gmail.com",
            Password : "961CCBA491B80A118101899A82CBD6217988",
            To : `prajapatirahul1712001@gmail.com`,
            From : "shettyrohit268@gmail.com",
            Subject : "Hello from rahul",
            Body : `Room Id : ${roomId.value},
                    Link : ${link}`,
            }).
            then(
                message => {
                    console.log(message);
                    alert(`mail sent successfully`);
                }
            )
            .catch(err => {alert(err)});
        },
        'Show Commands': function(){
            const command = document.getElementById('command-modal-button');
            console.log("hello ",command);
            command.click();
        },
        'Close Commands':function(){
            const close = document.getElementById('command-modal-button');
            close.click();
        },
        'Enter Meeting': function(){
            const copyText = document.getElementById("roomId");
            //console.log(copyText.value)
            window.location.href = `/room/${copyText.value}`
        },

    };

    annyang.addCommands(commands);
    annyang.start();
}
