
// const room = (req,res) => {
//     // Extracting the Room ID
//     const roomId = req.params.roomId;
//     console.log("Inside room")
//     try {
//         if (counter >= 10) {
//             res.render('capacityFull', { roomId: roomId });
//         } 
//         else {
//             res.render('room', {
//                 roomId: roomId,
//                 userFName: users[users.length - 1].fname,
//                 userLName: users[users.length - 1].lname,
//                 userEmail: users[users.length - 1].email,
//                 userPhone: users[users.length - 1].phone,
//                 userName: users[users.length - 1].nname,
//             });
//         }
//     } catch (e) {
//         res.redirect(`/info/${req.params.roomId}`);
//     }
// }

const room_mode_1 = (req,res) => {
    try{
        console.log("Inside room_mode_1");
        const roomId = req.params.roomId;
        if (counter >= 10) {
            res.render('capacityFull', { roomId: roomId });
        } 
        else {
            console.log("room Id", roomId);
            console.log("users ", users);
            res.render('room-1', {
                roomId: roomId,
                userFName: users[users.length - 1].fname,
                userLName: users[users.length - 1].lname,
                userEmail: users[users.length - 1].email,
                userPhone: users[users.length - 1].phone,
                userName: users[users.length - 1].nname,
            });
        }
        //res.render('room', { roomId: roomId });
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

const room_mode_2 = (req,res) => {
    try{
        console.log("Inside room_mode_2");
        const roomId = req.params.roomId;
        if (counter >= 10) {
            res.render('capacityFull', { roomId: roomId });
        } 
        else {
            res.render('room-2', {
                roomId: roomId,
                userFName: users[users.length - 1].fname,
                userLName: users[users.length - 1].lname,
                userEmail: users[users.length - 1].email,
                userPhone: users[users.length - 1].phone,
                userName: users[users.length - 1].nname,
            });
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

const room_mode_3 = (req,res) => {

}

const room_mode_4 = (req,res) => {
}

const room_mode_2_demo = (req, res) => {
    res.render('room-2', {
        roomId: "abcd",
        userFName: "dum",
        userLName: "dum",
        userEmail: "dummy@gmail.com",
        userPhone: "8793531178",
        userName: "dummy",
    });
}

module.exports = {room_mode_1,room_mode_2,room_mode_3,room_mode_4, room_mode_2_demo };