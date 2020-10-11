import Affiliate from '../../models/affiliate'

const create = async (req, res) => {
  try {
    const affiliate = new Affiliate({
      name: req.body.name,
      lastname: req.body.lastname,
      plan: req.body.plan,
    })
    const newAffiliate = await affiliate.save()
    res.json(newAffiliate)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
