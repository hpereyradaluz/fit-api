import Affiliate from '../../models/affiliate'

const remove = async (req, res) => {
  try {
    const affiliate = await Affiliate.findByIdAndDelete(req.params.id)
    if (!affiliate) res.status(404).json({ message: 'Affiliate not found' })
    else res.json(affiliate)
  } catch (err) {
    res.status(500).json({ message: `ERROR: ${err}` })
  }
}

export default remove
