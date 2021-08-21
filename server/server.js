const firebaseConfig = require("../server/config/config");
const firebase = require("firebase");
require("firebase/firestore");

const express = require("express");
const app = express();
const cors = require("cors");

firebase.initializeApp(firebaseConfig);

app.listen(5001, () =>{
    console.log("Listening on port 5001");
})