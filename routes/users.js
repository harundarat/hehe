const express = require("express");
const router = express.Router();
const usersHandler = require("./handler/users");

router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.get("/", usersHandler.getUser);
router.get("/:id", usersHandler.getID);

module.exports = router;
