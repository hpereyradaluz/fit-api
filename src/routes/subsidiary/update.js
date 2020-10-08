import Subsidiary from '../../models/subsidiary'

const update = async (req, res) => {
  try {
    const subsidiary = await Subsidiary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    ) //.populate('author')
    if (!subsidiary) res.status(404).json({ message: 'Subsidiary not found' })
    else res.json(subsidiary)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default update
