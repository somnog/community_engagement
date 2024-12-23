const Facilitator = require('../models/facilitator')

// get facilatators
exports.get_facilitators = async (req, res) =>{
    try {
      const facilitators = await Facilitator.find({});
      console.log("ss", facilitators)
      res.status(201).json(facilitators)

    } catch (err){
        res.status(500).json(err)
    }
}

// save new facilitators
exports.save_facilatitators = async (req, res) => {
    const {name, phone, email,title, image } =req.body;
    const Save_new= new Facilitator({
        name, phone, email,title, image
    })
    await Save_new.save() 
    res.status(200).json(Save_new)
}