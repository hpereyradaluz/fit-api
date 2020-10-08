import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
//const ObjectId = mongoose.Schema.Types.ObjectId

const AffiliateSchema = new mongoose.Schema(
  {
    // subsidiary: {
    //   type: ObjectId,
    //   ref: 'Subsidiary',
    //   required: true,
    // },
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

// AffiliateSchema.post('save', (affiliate, next) => {
//   affiliate
//     .populate('subsidiary')
//     .execPopulate()
//     .then(() => next())
// })

export default mongoose.model('Affiliate', AffiliateSchema)
