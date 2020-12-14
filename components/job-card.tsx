import Link from "next/link";
import React from "react";
import { Job } from "../models/job";
import styles from "../styles/job-card.module.css";

interface JobProps {
	job: Job;
}

interface CompanyStyle {
	logo: string;
	primary: string;
	secondary: string;
}

function getCompanyStyle(company: string): CompanyStyle {
	let companyStyle: CompanyStyle;

	switch (company) {
		case "AMAZON":
			companyStyle = { logo: "amazon.webp", primary: "#F79C34", secondary: "#262F3D" };
			break;
		case "NETFLIX":
			companyStyle = { logo: "netflix.webp", primary: "#E50A13", secondary: "#000000" };
			break;
		default:
			companyStyle = { logo: "amazon.webp", primary: "#F79C34", secondary: "#262F3D" };
			break;
	}

	return companyStyle;
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
					<div className={styles.location}>{job.location + " | " + job.date}</div>
				</section>
			</div>
		</Link >
	);
}