const express = require("express");

const router = express.Router();

const {getContact} = require ('../controllers/contactController');

const {createContact} = require ('')

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get();

router.route("/:id").put();

router.route("/:id").delete();

module.exports = router;
