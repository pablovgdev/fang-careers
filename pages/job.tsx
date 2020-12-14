import { useRouter } from "next/dist/client/router";
import React from "react";
import Container from "../components/container";
import JobDetail from "../components/job-detail";
import { Job } from "../models/job";
import { loadJobs } from "../util/util";

export default function JobPage() {
	const { query } = useRouter();

	const jobsData = loadJobs();
	const job = jobsData.find(job => job.id === query.id) as Job;

	return <Container><JobDetail job={job} /></Container>;
}