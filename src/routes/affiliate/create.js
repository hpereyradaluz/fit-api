import Affiliate from '../../models/affiliate'
//import mongoose from 'mongoose'

const create = async (req, res) => {
  try {
    const affiliate = new Affiliate({
      //subsidiary: mongoose.Types.ObjectId(req.body.subsidiary),
      name: req.body.name,
      lastName: req.body.lastName,
      plan: req.body.plan,
    })
    const newAffiliate = await affiliate.save()
    res.json(newAffiliate)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
