const express = require("express");

const router = express.Router();

const {getContacts} = require ('../controllers/contactController');

const {createContacts} = require ('../controllers/contactController');

const {createContacts} = require ('../controllers/contactController');



router.route("/").get(getContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
