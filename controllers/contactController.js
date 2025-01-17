//@ampolperlada  @desc this is controller is for Contacts to get all data
const asyncHandler = require("express-async-handler");
//@getContact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async(req, res) => {
  res.status(200).json(contactsx);
});

//@create new contact
//@route POST /api/contacts
//@access public
const createContacts = asyncHandler (async (req,res) => {
  console.log("The request body is " , req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory");

  }
  res.status(201).json({message: "Create Contact"});
});

//@create Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler (async (req,res) => {
  res.status(200).json({message: `Get contact for ${req.params.id}`});
});


//@create Update contact
//@route GET /api/contacts/:id
//@access public
const updateContact = asyncHandler (async (req,res) => {
  res.status(200).json({message: `Update contact ${req.params.id}`});
});

//@create Delete contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = asyncHandler (async (req,res) => {
  res.status(200).json({message: `Delete contact for ${req.params.id}`});
});


module.exports = { getContacts, createContacts, getContact, updateContact, deleteContact };