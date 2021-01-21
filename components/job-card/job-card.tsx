import styled from "@emotion/styled";
import React, { useState } from "react";
import { Job } from "../../models/job";
import { getCompanyStyle } from "../../utils/util";
import JobContent from "./job-content";
import JobDescription from "./job-description";
import JobLogo from "./job-logo";
import JobMain from "./job-main";

interface StyledJobCardProps {
  background: string;
  hover: string
}

const StyledJobCard = styled.div<StyledJobCardProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  background-color: ${props => props.background};
  @media (min-width: 768px) {
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all .1s ease;
    &:hover {
      background-color: ${props => props.hover};
    }
  }
`;

interface JobProps {
  job: Job;
}

export default function JobCard({ job }: JobProps) {
  const [open, setOpen] = useState(false);
  const companyStyle = getCompanyStyle(job.company);

  function toggleDescription() {
    setOpen(!open);
  };

  return (
    <StyledJobCard background={companyStyle.background} hover={companyStyle.hover}>
      <JobContent job={job} companyStyle={companyStyle} open={open} onClick={toggleDescription} />
      <JobDescription open={open} description={job.description} />
    </StyledJobCard >
  );
}