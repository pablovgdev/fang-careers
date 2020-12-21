import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";
import { dateFormat, getCompanyStyle } from "../util/util";

interface JobProps {
	job: Job;
}

export default function JobCard({ job }: JobProps) {
	const companyStyle = getCompanyStyle(job.company);

	return (
		<>
			<div className={styles.card}>
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
						<p className={styles.location}>{job.locations.join(" / ")}</p>
						<p className={styles.date}>{dateFormat(job.date)}</p>
					</div>
				</section>
			</div>
			<div className={styles.description}>
				<p>{ReactHtmlParser(job.description)}</p>
			</div>
		</>
	);
}