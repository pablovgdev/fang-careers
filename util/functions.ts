import jobs from "../data/jobs.json";
import { Job } from "../models/job";

export function loadJobs(): Job[] {
	return jobs.map(job => job as Job);
}