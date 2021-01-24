import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { Job } from "../models/job";
import JobCard from "./job-card/job-card";
import { JobsContext } from "./jobs-context";

const StyledJobList = styled.div`
  width: 100%;
	display: flex;
	flex-direction: column;
`;

export default function JobsList() {
  const { jobs, tagsFilter } = useContext(JobsContext);

  const emptyJobs: Job[] = []
  const [filteredJobs, setFilteredJobs] = useState(emptyJobs);
  const [infiniteJobs, setInfiniteJobs] = useState(emptyJobs);

  useEffect(() => {
    let newJobs: Job[] = jobs;

    if (tagsFilter.length) {
      newJobs = newJobs.filter(job => {
        for (const tag of tagsFilter) {
          if (!job.tags.find(jobTag => jobTag.value === tag.value)) {
            return false;
          }
        }

        return true;
      });
    }

    setFilteredJobs(newJobs);
    setInfiniteJobs(newJobs.slice(0, 20));
  }, [tagsFilter]);

  function nextJobs() {
    setInfiniteJobs(filteredJobs.slice(0, infiniteJobs.length + 20));
  }

  return (
    <StyledJobList>
      <InfiniteScroll
        pageStart={0}
        loadMore={nextJobs}
        hasMore={infiniteJobs.length < filteredJobs.length}
      >
        {infiniteJobs.map(job => <JobCard key={job.id} job={job} />)}
      </InfiniteScroll>
    </StyledJobList>
  );
}