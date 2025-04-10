import { model, Schema } from "mongoose";


export interface IJob {
    company: string;
    role: string;
    status: string;
    applicationDate: Date;
    link: string;
    createdAt: Date;
}

const JobSchema = new Schema({
    company: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      required: true,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
      default: 'Applied'
    },
    applicationDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    link: {
      type: String,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const JobModel = model<IJob>("Job", JobSchema);
  
  export default JobModel;