import Link from "next/link";
import React from "react";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";
import { dateFormat, getCompanyStyle } from "../util/util";

interface JobProps {
	job: Job;
}

export default function JobCard({ job }: JobProps) {
	const companyStyle = getCompanyStyle(job.company);

	return (
		<Link href={{ pathname: '/job', query: { id: job.id } }} >
			<div className={styles.card} >
				<div className={styles.logo} style={{ backgroundColor: companyStyle.secondary }}>
					<img src={companyStyle.logo} alt="logo" />
				</div>
				<section className={styles.section}>
					<h3>{job.title}</h3>
					<div
						className={styles.category}
						style={{
							backgroundColor: companyStyle.secondary,
							color: companyStyle.primary
						}}
					>{job.category.toUpperCase()}</div>
					<div className={styles.details}>
						<p className={styles.location}>{job.location}</p>
						<p className={styles.date}>{dateFormat(job.date)}</p>
					</div>
				</section>
			</div>
		</Link >
	);
}