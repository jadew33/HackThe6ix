const express = require("express");
const router = express();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();
const partnersRef = db.collection("partners");

router.post('/', (req, res) => {

    const {name, rewards} = req.body;

    const newPartner = {
        name: name,
        rewards: rewards,
    }

    partnersRef
    .add(newPartner)
    .then(() => {
        res.status(200).send(newPartner);
    })
    .catch(error => {
        console.log(error);
        res.status(400);
    })

});

router.get('/', (req, res) => {

    partnersRef
    .get()
    .then(function(querySnapshot) {
        let partners = []

        querySnapshot.forEach(doc => {
            let partner = doc.data();
            partners.push(partner);
        });
        res.status(200).send(partners);
    })
    .catch(err => {
        console.log(err);
        res.status(400);
    });

});

module.exports = router;