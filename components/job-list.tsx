import React from "react";
import { Job } from "../models/job";
import styles from "../styles/job-list.module.css";
import JobCard from "./job-card";

interface JobGridProps {
	jobs: Job[];
}

export default function JobList({ jobs }: JobGridProps) {
	return (
		<div className={styles.jobList}>
			{jobs.map(job => <JobCard key={job.id} job={job} />)}
		</div>
	);
}