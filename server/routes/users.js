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
    usersRef.doc(id).get()
    .then(function(snapshot) {
        const user = snapshot.data();
        return res.status(200).send(user);
    })
    .catch(function(error) {
        console.log(error);
        res.send(400);
    });
});

router.put("/:id", (req, res) => {

    const id = req.params.id;
    const updateBody = req.body;

    usersRef.doc(id).get()
    .then(function(snapshot) {
        
    })
    .catch(function(error) {
        res.status(400).send("User does not exist");
    });

    //Update Monthly Budget
    if (updateBody.budget) {

        usersRef.doc(id).update({
            budget: updateBody.budget
        })
        .then(function(user) {
            res.status(200).send(user);
        })
        .catch(function(error) {
            console.log(error);
            res.send(400);
        });
    }

    //Update Expenditure 
    if (updateBody.expenditure) {

        let delta = firebase.firestore.FieldValue.increment(updateBody.expenditure);
        
        usersRef.doc(id).update({
            expenditure: delta
        })
        .then(

            usersRef.doc(id).get()
            .then(function(snapshot) {
                const user = snapshot.data();

                if (user.expenditure > user.budget) {
                    usersRef.doc(id).update({
                        meetingBudgetGoal: false 
                    })
                }

                res.status(200).send(user);
            })
            .catch(function(error) {
                console.log(error);
                res.send(400);
            })
        )
        .catch(function(error) {
            console.log(error);
            res.send(400);
        });

    }

    //Update status of user's goal
    if (updateBody.meetingBudgetGoal) {

        usersRef.doc(id).update({
            meetingBudgetGoal: updateBody.meetingBudgetGoal
        })
        .then(function(user) {
            res.status(200).send(user);
        })
        .catch(function(error) {
            console.log(error);
            res.send(400);
        });
    }

    //Monthly Reset
    if (updateBody.reset) {
        usersRef.doc(id).update({
            meetingBudgetGoal: true,
            expenditure: 0
        })
        .then(function(user) {
            res.status(200).send(user);
        })
        .catch(function(error) {
            console.log(error);
            res.send(400);
        });
    }

});

module.exports = router;