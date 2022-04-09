
const join_room = (req,res) => {
    try{
        console.log(counter)
        // for POST 
        if(req.body.roomId){
            console.log("Inside Join Room page");
            const roomId = req.body.roomId;
            res.redirect(`/info/${roomId}`);
        }
        // for GET
        else{
            console.log("join Room page");
            res.render('joinRoom');
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

module.exports = {join_room};