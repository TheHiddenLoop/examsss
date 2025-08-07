import { Card } from "../model/db.js";


export const addCardData = async (req, res) => {
  try {
    const { name, address, email, contact, website } = req.body;
    const card = await Card.findOne({email});
    if (card) {
      return res.json({ success: false, message: "Email already exist." });
    }
    const saveCard = await Card.create({
      name,
      email,
      address,
      contact,
      website,
    });
    res.json({ success: true, message: "Data added", saveCard });
  } catch (error) {
    console.log("Error related to card add", error);
  }
};


export const getCardData = async (req, res) => {
  try {
    const card = await Card.find();
    res.json({ success: true, message: "Data added", card });
  } catch (error) {
    console.log("Error related to card add", error);
  }
};

export const updateCardData=async (req, res) => {
    try {
        const id=req.param.id;
    const { name, address, contact, website } = req.body;
    const updateData=await Card.findByIdAndUpdate(id, {name, contact, address,website },{ new: true });
    if(!updateCardData){
      return res.json({ success: false, message: "Id not exist." });
    }
    res.json({ success: true, message: "Data added", updateData });
  } catch (error) {
    console.log("Error related to card add", error);
  }
}
