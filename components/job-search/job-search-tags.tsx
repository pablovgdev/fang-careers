import styled from "@emotion/styled";
import React, { useContext } from "react";
import { JobsContext } from "../jobs-context";
import JobSearchTag from "./job-search-tag";

interface StyledJobSearchTagsProps {
  length: number;
}

const StyledJobSearchTags = styled.div<StyledJobSearchTagsProps>`
  display: ${props => props.length ? "flex" : "none"};
  flex-flow: row wrap;
  align-items: center;
  padding: 5px;
`;


export default function JobSearchTags() {
  const { tagsFilter } = useContext(JobsContext);

  return (
    <StyledJobSearchTags length={tagsFilter.length}>
      {tagsFilter.map((tag, index) => <JobSearchTag tag={tag} key={index} />)}
    </StyledJobSearchTags>
  );
}