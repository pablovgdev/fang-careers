import styled from "@emotion/styled";
import React from "react";
import { Job } from "../../../models/job";
import JobDescriptionDetails from "./job-description-details";
import JobDescriptionText from "./job-description-text";

interface StyledDescriptionProps {
  open: boolean;
}

const StyledDescription = styled.div<StyledDescriptionProps>`
  display: ${props => props.open ? "block" : "none"};
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid gray;
  @media (min-width: 768px) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
  }
`;

interface JobDescriptionProps {
  job: Job;
  open: boolean;
}

export default function JobDescription({ job, open }: JobDescriptionProps) {
  return (
    <StyledDescription open={open}>
      <JobDescriptionDetails job={job} />
      <JobDescriptionText description={job.description} />
    </StyledDescription>
  )
}