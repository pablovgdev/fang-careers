import axios from "axios";
import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/next-server/server/router";
import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/container";
import JobsContainer from "../components/jobs-container";
import { JobsContext } from "../components/jobs-context";
import { Job } from "../models/job";
import { TAG_TYPE } from "../models/tags";

interface JobsPageProps {
  jobs: Job[];
  tags: string[];
}

export default function JobsPage({ jobs, tags }: JobsPageProps) {
  const [tagsFilter, setTagsFilter] = useState([] as string[]);
  const jobsContext: JobsContext = { jobs, tags, tagsFilter, setTagsFilter };

  return (
    <>
      <Head>
        <title>FANG</title>
      </Head>
      <Container>
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

  const tags: string[] = [];

  if (!jobs) {
    return { notFound: true };
  } else {
    for (const job of jobs) {
      const company = job.company.toUpperCase();
      job?.tags?.push({ value: company, type: TAG_TYPE.COMPANY });

      if (!tags.includes(company)) {
        tags.push(company);
      }

      for (const location of job.locations) {
        const locationParts = location.split(",");

        for (const locationPart of locationParts) {
          const cleanPart = locationPart.trim().toUpperCase();
          job?.tags?.push({ value: cleanPart, type: TAG_TYPE.LOCATION });

          if (!tags.includes(cleanPart)) {
            tags.push(cleanPart);
          }
        }
      }

      for (const tag of job.tags) {
        const cleanTag = tag.value.toUpperCase();

        if (!tags.includes(cleanTag)) {
          tags.push(cleanTag)
        }
      }
    }

    tags.sort()

    return { props: { jobs, tags }, revalidate: 86400 };
  }
}