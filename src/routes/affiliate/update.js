import Affiliate from '../../models/affiliate'

const update = async (req, res) => {
  try {
    const affiliate = await Affiliate.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    if (!affiliate) res.status(404).json({ message: 'Affiliate not found' })
    else res.json(affiliate)
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}` })
  }
}

export default update
