const firebaseConfig = require("./config/config");
const firebase = require("firebase");
require("firebase/firestore");

const admin = require("firebase-admin");

var serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

firebase.initializeApp(firebaseConfig);

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const partnersRoute = require("./routes/partners");

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/partners", partnersRoute);

app.listen(5001, () =>{
    console.log("Listening on port 5001");
})
