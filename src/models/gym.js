import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const GymSchema = new mongoose.Schema(
  {
    name: {
      type: 'String',
      required: true,
      minlength: 1,
      maxlength: 30,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number], // Note that longitude comes first in a GeoJSON coordinate array, not latitude.
        required: true,
      },
    },
    kind: {
      type: {
        type: String,
        enum: ['Normal', 'Open'],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
)

GymSchema.plugin(mongoosePaginate)

export default mongoose.model('Gym', GymSchema)
