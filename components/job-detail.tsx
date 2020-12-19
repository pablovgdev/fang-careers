import ReactHtmlParser from "react-html-parser";
import { Job } from "../models/job";
import styles from "../styles/job-detail.module.css";
import { dateFormat } from "../util/util";

interface JobDetailProps {
	job: Job;
}

export default function JobDetail({ job }: JobDetailProps) {
	return (
		<div className={styles.jobDetail}>
			<h1 className={styles.title}>{job.title}</h1>
			<div className={styles.details}>
				<div>{job.location}</div>
				<div>{dateFormat(job.date)}</div>
			</div>
			<p>{ReactHtmlParser(job.description)}</p>
		</div>
	);
}