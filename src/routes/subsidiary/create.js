import Subsidiary from '../../models/subsidiary'

const create = async (req, res) => {
  try {
    const subsidiary = new Subsidiary({
      name: req.body.name,
      location: req.body.location,
      kind: req.body.kind,
    })
    const newSubsidiary = await subsidiary.save()
    res.json(newSubsidiary)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
