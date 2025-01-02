//@ampolperlada  @desc this is controller is for Contacts to get all data

//@getContact
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
  res.status(200).json({message: "Get all contacts"});
}

//@create new contact
//@route POST /api/contacts
//@access public
const createContacts = (req,res) => {
  console.log("The request body is " , req.body);
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