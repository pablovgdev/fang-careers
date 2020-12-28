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

interface JobsPageProps {
	jobs: Job[];
	companies: string[];
	locations: string[];
	tags: string[];
}

export default function JobsPage({ jobs, companies, locations, tags }: JobsPageProps) {
	const [companyFilter, setCompanyFilter] = useState("");
	const [locationFilter, setLocationFilter] = useState("");
	const [tagsFilter, setTagsFilter] = useState([] as string[]);

	const jobsContext: JobsContext = {
		jobs, companies, locations, tags,
		locationFilter, setLocationFilter,
		companyFilter, setCompanyFilter,
		tagsFilter, setTagsFilter
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

	const companies: string[] = [];
	const locations: string[] = [];
	const tags: string[] = [];

	if (!jobs) {
		return { notFound: true };
	} else {
		for (const job of jobs) {
			if (!companies.includes(job.company)) {
				companies.push(job.company);
			}

			for (const location of job.locations) {
				const parts = location.split(",");

				for (const part of parts) {
					const cleanPart = part.trim();

					if (!locations.includes(cleanPart)) {
						locations.push(cleanPart);
					}
				}
			}

			for (const tag of job.tags) {
				if (!tags.includes(tag.value.toUpperCase())) {
					tags.push(tag.value.toUpperCase())
				}
			}
		}

		companies.sort();
		locations.sort();
		tags.sort()

		return { props: { jobs, companies, locations, tags }, revalidate: 86400 };
	}
}