
const render_info = (req,res) => {
    try{
        const roomId = req.params.roomId;
        res.render('info', { roomId: roomId });
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

const handle_form_data = (req,res) => {
    try{
        // Extracting the User Filled Form Data
        const obj = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            nname: req.body.nname
        }
        console.log(req.body.mode);
        let flag = false;

        // Checking whether there exits another user with similar credentials
        // for (let i=0; i < users.length; i++) {
        //     if (users[i].fname === obj.fname && (users[i].nname === obj.nname || users[i].email === obj.email)) {
        //         flag = true;
        //         console.log("User Found with Same Name");
        //         break;
        //     }
        // }

        // If the user entered credentials are unique, pushing the user in the user's list
        if (!flag) {
            users.push(obj);
            console.log("Users List: ", users);
            if(req.body.mode === '1' || req.body.mode === '0'){
                res.redirect(`/room/mode-1/${req.params.roomId}`);
            }
            else if(req.body.mode === '2'){
                res.redirect(`/room/mode-2/${req.params.roomId}`);
            }
            else if(req.body.mode === '3'){
                res.redirect(`/room/mode-3/${req.params.roomId}`);
            }
            else{
                res.redirect(`/room/mode-4/${req.params.roomId}`);
            }
            
        }
        // If the user entered credentials are not unique, redirecting it to the formError Page
        else {
            res.redirect(`/formError/${req.params.roomId}`);
        }

    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

module.exports = {render_info,handle_form_data};