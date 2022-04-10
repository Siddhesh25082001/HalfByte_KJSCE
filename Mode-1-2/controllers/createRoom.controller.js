const { v4: uuidv4 } = require('uuid');

const create_room = (req,res) => {
    try{
        console.log(users,counter);
       // console.log("create Room page");
        const roomId = uuidv4();
        console.log(roomId);
        res.render('createRoom', { roomId: roomId });
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

module.exports = {create_room};