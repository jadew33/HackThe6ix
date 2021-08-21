const express = require("express");
const router = express();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

router.post('/login', (req, res) => {

    const {email, password} = req.body;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential;
        res.status(200).send(user);
    })
    .catch(err => {
        console.log(err.message);
        console.log("Login Unsuccessful");
        res.send(400);
    });

});

router.post('/logout', (req, res) => {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        res.send(200);
      }).catch((error) => {
        // An error happened.
        console.log(error);
        res.send(400);
      });
      
});

module.exports = router;