import React, { useContext, useEffect, useState } from "react";
import { Job } from "../models/job";
import styles from "../styles/jobs-list.module.css";
import JobCard from "./job-card";
import { JobsContext } from "./jobs-context";


export default function JobsList() {
	const { jobs, tags, companyFilter, locationFilter } = useContext(JobsContext);
	const [filteredJobs, setFilteredJobs] = useState(jobs);

	useEffect(() => {
		let newJobs: Job[] = jobs;

		if (companyFilter) {
			newJobs = newJobs.filter(job => job.company === companyFilter);
		}

		if (locationFilter) {
			newJobs = newJobs.filter(job => {
				for (const location of job.locations) {
					if (location.includes(locationFilter)) {
						return true;
					}
				}

				return false;
			});
		}

		if (tags.length) {
			newJobs = newJobs.filter(job => {
				for (const tag of tags) {
					if (!job.tags.find(jobTag => jobTag.value === tag)) {
						return false;
					}
				}

				return true;
			});
		}

		setFilteredJobs(newJobs);
	}, [tags, companyFilter, locationFilter]);

	return (
		<div className={styles.jobList}>
			{filteredJobs.map(job => <JobCard key={job.id} job={job} />)}
		</div>
	);
}