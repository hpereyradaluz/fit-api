import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const AffiliateSchema = new mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 30,
    },
    lastname: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 30,
    },
    plan: {
      type: {
        type: String,
        enum: ['Basic', 'Complete'],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
)

AffiliateSchema.plugin(mongoosePaginate)

export default mongoose.model('Affiliate', AffiliateSchema)
