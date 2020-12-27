import axios from "axios";
import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/next-server/server/router";
import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/container";
import JobsContainer from "../components/jobs-container";
import { JobsContext } from "../components/jobs-context";
import Landing from "../components/landing";
import { Job } from "../models/job";
import { Tag } from "../models/tags";

interface JobsPageProps {
	jobs: Job[];
	locations: string[];
	companies: string[];
}

export default function JobsPage({ jobs, locations, companies }: JobsPageProps) {
	const [locationFilter, setLocationFilter] = useState("");
	const [companyFilter, setCompanyFilter] = useState("");
	const [tags, setTags] = useState([] as string[]);

	const jobsContext: JobsContext = {
		jobs, locations, companies,
		locationFilter, setLocationFilter,
		companyFilter, setCompanyFilter,
		tags, setTags
	};

	return (
		<>
			<Head>
				<title>FANG</title>
			</Head>
			<Container>
				<Landing />
				<JobsContext.Provider value={jobsContext}>
					<JobsContainer />
				</JobsContext.Provider>
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
		const locations: string[] = [];
		const companies: string[] = [];

		for (const job of jobs) {
			for (const location of job.locations) {
				const parts = location.split(",");

				for (const part of parts) {
					const cleanPart = part.trim();

					if (!locations.includes(cleanPart)) {
						locations.push(cleanPart);
					}
				}
			}

			if (!companies.includes(job.company)) {
				companies.push(job.company);
			}

			locations.sort();
			companies.sort();
		}

		return { props: { jobs, locations, companies }, revalidate: 86400 };
	}
}