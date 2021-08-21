const express = require("express");
const router = express.Router({ mergeParams: true });

router.route("/new-goal").post((req, res) => {
  console.log("reached");
});

router.route("/").get((req, res) => {
  console.log("goal home reached");
});

module.exports = router;
