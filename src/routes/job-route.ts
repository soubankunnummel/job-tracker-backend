
import { Router } from "express";
import tryCatch from "../middleware/try-catch";
import { jobController } from "../controller/job-controller";

const jobRoutes = Router();

jobRoutes.post("/add", tryCatch(jobController.addJob));
jobRoutes.get("/", tryCatch(jobController.getJobs));
jobRoutes.get("/:id", tryCatch(jobController.getJobById));  
jobRoutes.patch("/:id", tryCatch(jobController.updateJob));
jobRoutes.delete("/:id", tryCatch(jobController.deleteJob));

export default jobRoutes;