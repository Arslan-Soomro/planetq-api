const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const audiosRef = admin.database().ref('/audios');

router.get('/', (req , res) => {
    audiosRef.once('value', (data) => {
        res.status(200).json(data);
    })
})

router.post('/', (req, res) => {
    if(req.body.name && req.body.artist && req.body.dlink){
        audiosRef.push({
            name : req.body.name,
            artist : req.body.artist,
            dlink : req.body.dlink,
        })
        res.status(201).json({message: 'Audio Added Succesfully'});
    }
})



module.exports = router;