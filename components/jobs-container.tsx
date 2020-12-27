import React from "react";
import styles from "../styles/jobs-container.module.css";
import JobsList from "./jobs-list";
import JobsSearch from "./jobs-search";


export default function JobsContainer() {
	return (
		<div className={styles.jobContainer}>
			<JobsSearch />
			<JobsList />
		</div>
	);
}