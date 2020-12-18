import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import React from "react";
import Container from "../components/container";
import JobDetail from "../components/job-detail";
import { Job } from "../models/job";

interface JobPageProps {
	job: Job;
}

export default function JobPage({ job }: JobPageProps) {
	return (
		<Container>
			<JobDetail job={job} />
		</Container>
	);
}

export async function getServerSideProps({ query }: NextPageContext) {
	const url = "https://fang-jobs-scraper.ew.r.appspot.com/jobs/software";
	const response = await axios.get<Job[]>(url);
	const jobs = response.data;
	const job = jobs.filter(job => job.id === query.id)[0];
	return { props: { job } };
}