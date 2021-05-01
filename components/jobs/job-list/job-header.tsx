import styled from "@emotion/styled";
import React from "react";
import { CompanyStyle } from "../../../models/company-style";
import { Job } from "../../../models/job";
import JobCountries from "./job-countries";
import JobLocations from "./job-countries";
import JobTitle from "./job-title";

const StyledHeader = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    border-radius: 5px;
    width: 60%;
  }
`;

interface JobHeaderProps {
  job: Job;
  companyStyle: CompanyStyle;
}

export default function JobHeader({ job, companyStyle }: JobHeaderProps) {
  return (
    <StyledHeader>
      <JobTitle title={job.title} url={job.url} color={companyStyle.primary} hover={companyStyle.hover} />
      <JobCountries countries={job.countries} color={companyStyle.secondary} hover={companyStyle.hover} />
    </StyledHeader>
  )
}