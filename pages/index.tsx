import axios from "axios";
import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/next-server/server/router";
import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/container";
import Jobs from "../components/jobs/jobs";
import { JobsContext } from "../components/jobs/jobs-context";
import { Job } from "../models/job";
import { Tag, TAG_TYPE } from "../models/tags";

interface JobsPageProps {
  jobs: Job[];
  tags: Tag[];
}

export default function JobsPage({ jobs, tags }: JobsPageProps) {
  const [tagsFilter, setTagsFilter] = useState([] as Tag[]);
  const [options, setOptions] = useState([] as Tag[]);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const jobsContext: JobsContext = {
    jobs, tags,
    tagsFilter, setTagsFilter,
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
  const url = "https://fang-jobs-scraper.ew.r.appspot.com/jobs/software";
  const response = await axios.get<Job[]>(url);
  const jobs = response.data;

  const tags: Tag[] = [];

  if (!jobs) {
    return { notFound: true };
  } else {
    for (const job of jobs) {
      const companyTag = {
        value: job.company.toUpperCase(),
        type: TAG_TYPE.COMPANY
      };
      job?.tags?.push(companyTag);

      if (!tags.find(tag => companyTag.value === tag.value)) {
        tags.push(companyTag);
      }

      for (const location of job.locations) {
        const locationParts = location.split(",");

        for (const locationPart of locationParts) {
          const locationTag = {
            value: locationPart.trim().toUpperCase(),
            type: TAG_TYPE.LOCATION
          };
          job?.tags?.push(locationTag);

          if (!tags.find(tag => tag.value === locationTag.value)) {
            tags.push(locationTag);
          }
        }
      }

      for (const tag of job.tags) {
        const techTag = {
          value: tag.value.toUpperCase(),
          type: tag.type
        };

        if (!tags.find(tag => tag.value === techTag.value)) {
          tags.push(techTag);
        }
      }
    }

    // tags.sort();

    return { props: { jobs, tags }, revalidate: 86400 };
  }
}