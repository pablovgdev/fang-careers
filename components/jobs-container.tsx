import React, { useState } from "react";
import { Job } from "../models/job";
import { Tag } from "../models/tags";
import styles from "../styles/jobs-container.module.css";
import { JobsContext } from "./jobs-context";
import JobsList from "./jobs-list";
import JobsSearch from "./jobs-search";

interface JobsContainerProps {
	jobsProps: Job[];
}

export default function JobsContainer({ jobsProps }: JobsContainerProps) {
	const [jobs, setJobs] = useState(jobsProps);
	const [tags, setTags] = useState([] as Tag[]);
	const jobsContext: JobsContext = { jobs, setJobs, tags, setTags };

	return (
		<JobsContext.Provider value={jobsContext}>
			<div className={styles.jobContainer}>
				<JobsSearch />
				<JobsList />
			</div>
		</JobsContext.Provider>
	);
}