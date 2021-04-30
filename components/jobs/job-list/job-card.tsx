import styled from "@emotion/styled";
import React, { useState } from "react";
import { Job } from "../../../models/job";
import { getCompanyStyle } from "../../../utils/util";
import JobContent from "./job-content";
import JobDescription from "./job-description";

interface StyledJobCardProps {
  background: string;
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
    <StyledJobCard background={companyStyle.background}>
      <JobContent job={job} companyStyle={companyStyle} open={open} onMouseDown={toggleDescription} />
      <JobDescription job={job} open={open} />
    </StyledJobCard >
  );
}