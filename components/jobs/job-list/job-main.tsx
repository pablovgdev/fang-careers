import styled from "@emotion/styled";
import React from "react";
import { CompanyStyle } from "../../../models/company-style";
import { Job } from "../../../models/job";
import JobHeader from "./job-header";
import JobTags from "./job-tags";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    border-radius: 5px;
    width: 100%;
    flex-direction: row;
  }
`;

interface JobMainProps {
  job: Job;
  companyStyle: CompanyStyle;
}

export default function JobMain({ job, companyStyle }: JobMainProps) {
  return (
    <StyledMain>
      <JobHeader job={job} companyStyle={companyStyle} />
      <JobTags job={job} companyStyle={companyStyle} />
    </StyledMain>
  );
}