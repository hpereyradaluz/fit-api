import Subsidiary from '../../models/subsidiary'

const remove = async (req, res) => {
  try {
    const subsidiary = await Subsidiary.findByIdAndDelete(req.params.id)
    if (!subsidiary) res.status(404).json({ message: 'Subsidiary not found' })
    else res.json(subsidiary)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default remove
