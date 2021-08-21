const express = require("express");
const router = express();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore();
const usersRef = db.collection("users");

router.post('/', (req, res) => {

    const {email, name, password, age, gender, occupation} = req.body;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

        let user = userCredential.user;

        let newUser = {
            email: email,
            name: name,
            age: age,
            gender: gender,
            occupation: occupation, 
        }
        
        usersRef.add(newUser)
        .then(()=> {
            res.status(200).send("User successfully added");
        })
        .catch(err => {
            console.log(err);
            console.log("User Already exists");        
        })


    })
    .catch(err => {
        console.log(err.message);
        console.log("Sign Up Failed");
        res.send(400);
    })

});

router.get("/", (req, res) => {
    
    let users = [];
    usersRef
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            users.push(doc.data());
        });
        res.status(200).send(users);

    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(400).send("Users not found");
    });

});

router.get("/:id", (req, res) => {

    let id = req.params.id;
    usersRef
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let user = doc.data();
            if (user.userId === id || user.user-id === id) {
                return res.status(200).send(user);
            }
        });
        return res.status(400).send("User not found");
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.status(400).send("User not found");
    });

});


module.exports = router;