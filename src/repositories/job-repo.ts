import Job from "../interface/job";
import JobModel from "../model/job-mode";

export const JobRepo = {
  findAll: () => JobModel.find().sort({ applicationDate: -1 }),
  findById: (id: string) => JobModel.findById(id),
  findByCompanyAndRole: (company: string, role: string) =>
    JobModel.findOne({ company, role }),
  create: (data: Job) => new JobModel(data).save(),
  update: (id: string, status: string) =>
    JobModel.findByIdAndUpdate(id, { status }, { new: true }),
  delete :(id : string) => JobModel.findByIdAndDelete(id)
};
