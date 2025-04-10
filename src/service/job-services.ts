import { JobRepo } from "../repositories/job-repo";
import AppError from "../utils/app-error";

export class JobServices {
  async addJob(jobData: any,) {
    // check existing job
    const existingJob = await JobRepo.findByCompanyAndRole(
      jobData.company,
      jobData.role
    );

    if (existingJob) {
      return new AppError("Job already exists", 400);
    }

    // Perform business validation
    if (!jobData.company || !jobData.role) {
      throw new AppError("Company and role are required fields", 400);
    }

    // Apply business rules
    if (!jobData.status) {
      jobData.status = "Applied";
    }

    return JobRepo.create(jobData);
  }

  getJobs() {
    return JobRepo.findAll();
  }
  getJobById(id: string) {
    return JobRepo.findById(id);
  }

  updateJob(id: string, jobData: any) {
    console.log(id, jobData, "job id ------------");

    if (!id || !jobData) {
      throw new AppError("Invalid id or job status", 400);
    }

    const { status } = jobData;
    if (
      status !== "Applied" &&
      status !== "Interview" &&
      status !== "Offer" &&
      status !== "Rejected"
    ) {
      return new AppError("Invalid status", 400);
    }

    return JobRepo.update(id, status);
  }

  deleteJob (id: string) {
    return JobRepo.delete(id);
  }
}
