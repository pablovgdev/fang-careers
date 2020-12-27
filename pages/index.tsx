import axios from "axios";
import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/next-server/server/router";
import Head from "next/head";
import React from "react";
import Container from "../components/container";
import JobsContainer from "../components/jobs-container";
import Landing from "../components/landing";
import { Job } from "../models/job";

interface JobsPageProps {
	jobs: Job[];
}

export default function JobsPage({ jobs }: JobsPageProps) {
	return (
		<>
			<Head>
				<title>FANG</title>
			</Head>
			<Container>
				<Landing />
				<JobsContainer jobsProps={jobs} />
			</Container>
		</>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Params>> {
	const url = "https://fang-jobs-scraper.ew.r.appspot.com/jobs/software";
	const response = await axios.get<Job[]>(url);
	const jobs = response.data;

	if (!jobs) {
		return { notFound: true };
	} else {
		return { props: { jobs }, revalidate: 86400 };
	}
}