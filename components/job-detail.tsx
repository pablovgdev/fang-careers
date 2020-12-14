import { Job } from "../models/job";
import styles from "../styles/job-detail.module.css";

interface JobViewProps {
	job: Job;
}

export default function JobDetail({ job }: JobViewProps) {
	return (
		<div className={styles.jobDetail}>
			<h1>{job.title}</h1>
			<p><b>Category: </b>{job.category}</p>
			<p><b>Location: </b>{job.location}</p>
			<p><b>Posted: </b>{job.date}</p>
			<p><b>Description:</b></p>
			<p dangerouslySetInnerHTML={{ __html: job.description }}></p>
		</div>
	);
}