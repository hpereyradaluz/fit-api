import Gym from '../../models/gym'

const remove = async (req, res) => {
  try {
    const gym = await Gym.findByIdAndDelete(req.params.id)
    if (!gym) res.status(404).json({ message: 'Gym not found' })
    else res.json(gym)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default remove
