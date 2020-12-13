import React from "react";
import styles from "../styles/job-grid.module.css";
import { loadJobs } from "../util/functions";
import JobCard from "./job-card";

export default function JobGrid() {
	const jobsData = loadJobs();

	return (
		<div className={styles.grid}>
			{jobsData.map(job => <JobCard key={job.id} job={job} />)}
		</div>
	);
}