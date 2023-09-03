import { DataTypes } from "sequelize";
import db from "../db/connection";

const Job = db.define(
  "job",
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.NUMBER,
    },
    company: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    isNew: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    underscored: true,
  }
);

export default Job;
