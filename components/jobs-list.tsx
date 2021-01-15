import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { Job } from "../models/job";
import styles from "../styles/jobs-list.module.css";
import JobCard from "./job-card";
import { JobsContext } from "./jobs-context";

export default function JobsList() {
  const { jobs, tagsFilter, companyFilter, locationFilter } = useContext(JobsContext);

  const emptyJobs: Job[] = []
  const [filteredJobs, setFilteredJobs] = useState(emptyJobs);
  const [infiniteJobs, setInfiniteJobs] = useState(emptyJobs);

  useEffect(() => {
    let newJobs: Job[] = jobs;

    if (companyFilter) {
      newJobs = newJobs.filter(job => job.company === companyFilter);
    }

    if (locationFilter) {
      newJobs = newJobs.filter(job => {
        for (const location of job.locations) {
          if (location.includes(locationFilter)) {
            return true;
          }
        }

        return false;
      });
    }

    if (tagsFilter.length) {
      newJobs = newJobs.filter(job => {
        for (const tag of tagsFilter) {
          if (!job.tags.find(jobTag => jobTag.value === tag)) {
            return false;
          }
        }

        return true;
      });
    }

    setFilteredJobs(newJobs);
    setInfiniteJobs(newJobs.slice(0, 20));
  }, [companyFilter, locationFilter, tagsFilter]);

  function nextJobs() {
    setInfiniteJobs(filteredJobs.slice(0, infiniteJobs.length + 20));
  }

  return (
    <div className={styles.jobList}>
      <InfiniteScroll
        pageStart={0}
        loadMore={nextJobs}
        hasMore={infiniteJobs.length < filteredJobs.length}
      >
        {infiniteJobs.map(job => <JobCard key={job.id} job={job} />)}
      </InfiniteScroll>
    </div>
  );
}