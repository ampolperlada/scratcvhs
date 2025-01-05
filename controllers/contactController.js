//@ampolperlada  @desc this is controller is for Contacts to get all data
const asyncHandler = require("express-async-handler");
//@getContact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (req,res) => {
  res.status(200).json({message: "Get all contacts"});
}

//@create new contact
//@route POST /api/contacts
//@access public
const createContacts = (req,res) => {
  console.log("The request body is " , req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory");

  }
  res.status(201).json({message: "Create Contact"});
}

//@create Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) => {
  res.status(200).json({message: `Get contact for ${req.params.id}`});
}


//@create Update contact
//@route GET /api/contacts/:id
//@access public
const updateContact = (req,res) => {
  res.status(200).json({message: `Update contact ${req.params.id}`});
}

//@create Delete contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
  res.status(200).json({message: `Delete contact for ${req.params.id}`});
}


module.exports = { getContacts, createContacts, getContact, updateContact, deleteContact };