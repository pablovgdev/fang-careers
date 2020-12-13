import Link from "next/link";
import React from "react";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";

interface JobProps {
	job: Job;
}

export default function JobCard({ job }: JobProps) {
	return (
		<Link href={{ pathname: '/job', query: { id: job.id } }} >
			<div className={styles.card} >
				<div className={styles.logo}>
					<img src="amazon.png" alt="logo" />
				</div>
				<section className={styles.section}>
					<h3>{job.title}</h3>
					<div className={styles.category}>{job.category.toUpperCase()}</div>
					<div className={styles.location}>{job.location}</div>
				</section>
			</div>
		</Link>
	);
}