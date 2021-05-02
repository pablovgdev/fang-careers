import axios from "axios";
import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/next-server/server/router";
import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/container";
import Jobs from "../components/jobs/jobs";
import { JobsContext } from "../components/jobs/jobs-context";
import { JOBS_URL } from "../config/env";
import { Job } from "../models/job";
import { Tag } from "../models/tags";

interface JobsPageProps {
  jobs: Job[];
  tags: Tag[];
}

export default function JobsPage({ jobs, tags }: JobsPageProps) {
  const [filteredJobs, setFilteredJobs] = useState([] as Job[]);
  const [tagsFilter, setTagsFilter] = useState([] as Tag[]);
  const [options, setOptions] = useState([] as Tag[]);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");

  const jobsContext: JobsContext = {
    jobs, filteredJobs, setFilteredJobs,
    tags, tagsFilter, setTagsFilter,
    options, setOptions,
    query, setQuery,
    title, setTitle
  };

  return (
    <>
      <Head>
        <title>FANG</title>
      </Head>
      <Container>
        <JobsContext.Provider value={jobsContext}>
          <Jobs />
        </JobsContext.Provider>
      </Container>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Params>> {
  const response = await axios.get<Job[]>(JOBS_URL);
  const jobs = response.data;

  const tags: Tag[] = [];

  if (!jobs) {
    return { notFound: true };
  } else {
    for (const job of jobs) {
      for (const jobTag of job.tags) {
        if (!tags.find(tag => tag.value === jobTag.value)) {
          tags.push(jobTag);
        }
      }
    }

    // tags.sort();

    return { props: { jobs, tags }, revalidate: 86400 };
  }
}