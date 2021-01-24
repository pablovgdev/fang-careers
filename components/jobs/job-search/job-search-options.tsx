import styled from "@emotion/styled";
import React, { useContext } from "react";
import { JobsContext } from "../jobs-context";
import JobSearchOption from "./job-search-option";

const StyledJobSearchOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 34px;
  width: 100%;
  background-color: white;
  overflow-y: scroll;
  max-height: 500px;
  @media (min-width: 768px) {
    background-color: white;
    border-bottom-left-radius: 5px;
  }
`;


export default function JobSearchOptions() {
  const { tagsFilter, options } = useContext(JobsContext);

  function availableOptions() {
    return options
      .filter(option => !tagsFilter.find(tag => tag.value === option.value))
      .map((option, index) => <JobSearchOption key={index} tag={option} />)
  }

  return (
    <StyledJobSearchOptions>
      {availableOptions()}
    </StyledJobSearchOptions>
  );
}