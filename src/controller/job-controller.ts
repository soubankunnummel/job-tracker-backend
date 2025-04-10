import { Request, Response } from "express";
import { JobServices } from "../service/job-services";
import AppError from "../utils/app-error";

class JobController {
  async addJob(req: Request, res: Response) {
    const jobData = req.body;
    const job = await new JobServices().addJob(jobData);

    if (job instanceof AppError) {
      return res.status(400).json({ job: job, message: "Job already exists" });
    }
    res.status(201).json({ job: job, message: "Job added successfully" });
  }

  async getJobs(req: Request, res: Response) {
    const jobs = await new JobServices().getJobs();
    if (jobs instanceof AppError) {
      return res.status(400).json({ jobs: jobs, message: "Job not found" });
    }
    res.status(200).json(jobs);
  }

  async getJobById(req: Request, res: Response) {
    const jobId = req.params.id;
    const job = await new JobServices().getJobById(jobId);
    if (job instanceof AppError) {
      return res.status(400).json({ job: job, message: "Job not found" });
    }
    res.status(200).json(job);
  }

  async updateJob(req: Request, res: Response) {
    const jobId = req.params.id;
    const jobData = req.body;
    const job = await new JobServices().updateJob(jobId, jobData);
    if (job instanceof AppError) {
      return res.status(400).json({ job: job, message: "Job not found" });
    }
    res.status(200).json(job);
  }

  async deleteJob(req: Request, res: Response) {
    const jobId = req.params.id;
    const job = await new JobServices().deleteJob(jobId);
    if (job instanceof AppError) {
      return res.status(400).json({ job: job, message: "Job not found" });
    }
    res.status(200).json(job);
  }
}

export const jobController = new JobController();
