import amazonJobs from "../data/amazon.json";
import netflixJobs from "../data/netflix.json";
import { Job } from "../models/job";

export function loadJobs(): Job[] {
	const amazon = amazonJobs.map(job => job as Job);
	const netflix = netflixJobs.map(job => job as Job);
	const jobs = [...amazon, ...netflix];

	jobs.sort((job1: Job, job2: Job) => {
		const date1 = new Date(job1.date);
		const date2 = new Date(job2.date);

		if (date1 > date2) {
			return -1;
		} else if (date1 < date2) {
			return 1;
		} else {
			// Randomize order between jobs with the same date
			const random = Math.floor((Math.random() * 2) + 1);

			if (random % 2) {
				return 1;
			} else {
				return -1;
			}
		}
	});

	return jobs;
}