import React from "react";
import data from "../data/jobs.json";
import { JobData } from "../models/job-data";
import Job from "./job";
import styles from "../styles/job-grid.module.css";

function loadJobs(): JobData[] {
	return data.map(job => job as JobData);
}

export default function JobGrid() {
	const jobsData = loadJobs();

	return (
		<div className={styles.grid}>
			{jobsData.map(jobData => <Job key={jobData.id} jobData={jobData} />)}
		</div>
	);
}