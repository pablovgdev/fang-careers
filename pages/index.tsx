import axios from "axios";
import React from "react";
import Container from "../components/container";
import JobGrid from "../components/job-grid";
import { Job } from "../models/job";

interface JobsPageProps {
	jobs: Job[];
}

export default function JobsPage({ jobs }: JobsPageProps) {
	return <Container><JobGrid jobs={jobs} /></Container>;
}

export async function getServerSideProps() {
	const response = await axios.get<Job[]>("http://localhost:3001/jobs/software");
	const jobs = response.data;
	return { props: { jobs } };
}