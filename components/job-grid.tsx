import React from "react";
import { Job } from "../models/job";
import styles from "../styles/job-grid.module.css";
import JobCard from "./job-card";

interface JobGridProps {
	jobs: Job[];
}

export default function JobGrid({ jobs }: JobGridProps) {
	return (
		<div className={styles.grid}>
			{jobs.map(job => <JobCard key={job.id} job={job} />)}
		</div>
	);
}