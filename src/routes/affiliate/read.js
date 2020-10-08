import Affiliate from '../../models/affiliate'

const read = async (req, res) => {
  try {
    const affiliate = await Affiliate.findById(req.params.id).populate('author')
    if (!affiliate) res.status(404).json({ message: 'Affiliate not found' })
    else res.json(affiliate)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default read
