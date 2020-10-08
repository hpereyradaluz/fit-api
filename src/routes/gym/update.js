import Gym from '../../models/gym'

const update = async (req, res) => {
  try {
    const gym = await Gym.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }) //.populate('author')
    if (!gym) res.status(404).json({ message: 'Gym not found' })
    else res.json(gym)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default update
