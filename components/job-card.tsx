import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";
import { dateFormat, getCompanyStyle } from "../util/util";

interface JobProps {
	job: Job;
}

export default function JobCard({ job }: JobProps) {
	const companyStyle = getCompanyStyle(job.company);
	const [open, setOpen] = useState(false);

	function toggleDescription() {
		setOpen(!open);
	};

	return (
		<>
			<div className={styles.card} onClick={toggleDescription}>
				<div className={styles.logo} style={{ backgroundColor: companyStyle.background }}>
					<img src={companyStyle.logo} alt="logo" />
				</div>
				<section className={styles.section}>
					<h2 className={styles.title}>{job.title}</h2>
					<div className={styles.details}>
						<p className={styles.location}>{job.locations.join(" / ")}</p>
						<p className={styles.date}>{dateFormat(job.date)}</p>
					</div>
				</section>
			</div>
			<div className={styles.description} style={{ display: open ? "block" : "none" }}>
				<p>{ReactHtmlParser(job.description)}</p>
			</div>
		</>
	);
}