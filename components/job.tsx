import React from "react";
import { JobData } from "../models/job-data";
import styles from "../styles/job.module.css";

interface JobProps {
	jobData: JobData;
}

export default function Job({ jobData }: JobProps) {
	return (
		<div className={styles.card}>
			<div className={styles.logo}>
				<img src="amazon.png" alt="logo" />
			</div>
			<section className={styles.section}>
				<h3>{jobData.title}</h3>
				<p>{jobData.category}</p>
				<p>{jobData.location}</p>
			</section>
		</div>
	);
}