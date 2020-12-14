import jobs from "../data/amazon.json";
import { Job } from "../models/job";

export function loadJobs(): Job[] {
	return jobs.map(job => job as Job);
}