import { DataTypes, Model } from 'sequelize'
import db from '../db/connection'
import { IJob } from '../interfaces'

const Job = db.define<Model<IJob>>(
  'job',
  {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    salary: {
      type: DataTypes.NUMBER
    },
    company: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    isNew: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    underscored: true
  }
)

export default Job
