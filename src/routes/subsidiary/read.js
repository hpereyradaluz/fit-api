import Subsidiary from '../../models/subsidiary'

const read = async (req, res) => {
  try {
    const subsidiary = await Subsidiary.findById(req.params.id).populate(
      'author'
    )
    if (!subsidiary) res.status(404).json({ message: 'Subsidiary not found' })
    else res.json(subsidiary)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default read
