import { DataTypes, Model, Optional } from 'sequelize'
import db from '../db/connection'
import { IJob } from '../interfaces'

const Job = db.define<Model<IJob, Optional<IJob, 'id'>>>(
  'job',
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
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
