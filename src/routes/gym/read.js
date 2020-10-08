import Gym from '../../models/gym'

const read = async (req, res) => {
  try {
    const gym = await Gym.findById(req.params.id).populate('author')
    if (!gym) res.status(404).json({ message: 'Gym not found' })
    else res.json(gym)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default read
