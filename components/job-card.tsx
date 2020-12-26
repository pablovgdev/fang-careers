import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";
import { dateFormat, getCompanyStyle } from "../util/util";
import TagLabel from "./tag-label";

interface JobProps {
	job: Job;
}

export default function JobCard({ job }: JobProps) {
	const companyStyle = getCompanyStyle(job.company);
	const location = job.locations.map(location => location.split(",")[0]).join(", ");
	const [open, setOpen] = useState(false);

	function toggleDescription() {
		setOpen(!open);
	};

	function renderTags() {
		if (job.tags.length) {
			return (
				<div className={styles.tags}>
					{job.tags.map(tag => <TagLabel tag={tag} key={tag.value} />)}
				</div>
			)
		} else {
			return null;
		}
	}

	return (
		<>
			<div className={styles.card} onClick={toggleDescription}>
				<div className={styles.logo} style={{ backgroundColor: companyStyle.background }}>
					<img src={companyStyle.logo} alt="logo" />
				</div>
				<section className={styles.section}>
					<h2 className={styles.title}>{ReactHtmlParser(job.title)}</h2>
					{renderTags()}
					<div className={styles.details}>
						<p className={styles.location}>{location}</p>
						<p className={styles.date}>{dateFormat(job.date)}</p>
					</div>
				</section>
			</div>
			<div className={styles.description} style={{ display: open ? "block" : "none" }}>
				<div>{ReactHtmlParser(job.description)}</div>
			</div>
		</>
	);
}