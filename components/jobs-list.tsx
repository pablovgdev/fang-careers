import React, { useContext, useEffect, useState } from "react";
import { Job } from "../models/job";
import styles from "../styles/jobs-list.module.css";
import JobCard from "./job-card";
import { JobsContext } from "./jobs-context";


export default function JobsList() {
	const { jobs, tags } = useContext(JobsContext);
	const [filteredJobs, setFilteredJobs] = useState(jobs);

	useEffect(() => {
		if (tags.length) {
			const newJobs = jobs.filter(job => {
				for (const tag of tags) {
					if (!job.tags.find(jobTag => jobTag.value === tag.value)) {
						return false;
					}
				}

				return true;
			});
			setFilteredJobs(newJobs);
		} else {
			setFilteredJobs(jobs);
		}
	}, [tags])

	return (
		<div className={styles.jobList}>
			{filteredJobs.map(job => <JobCard key={job.id} job={job} />)}
		</div>
	);
}