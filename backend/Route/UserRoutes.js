const express = require ("express");
const router= express.Router();
//Insert Model
const User = require("../Model/UserModel"); // <- correct
//Insert Controllers
const UserController = require("../Controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);

//export the router
module.exports = router;