//@ampolperlada  @desc this is controller is for Contacts to get all data
//@route GET /api/contacts
//@access public

const getContact = (req,res) => {
  res.status(200).json({message: "Get all contacts"});
}

module.exports = { getContact };