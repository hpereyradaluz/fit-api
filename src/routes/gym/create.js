import Gym from '../../models/gym'

const create = async (req, res) => {
  try {
    const gym = new Gym({
      name: req.body.name,
      location: req.body.location,
      kind: req.body.kind,
    })
    const newGym = await gym.save()
    res.json(newGym)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default create
