import styled from "@emotion/styled";
import React from "react";
import { CompanyStyle } from "../../../models/company-style";
import { Job } from "../../../models/job";
import JobLocations from "./job-locations";
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
  const locations = job.locations.map(location => location.split(",")[0]);

  return (
    <StyledHeader>
      <JobTitle title={job.title} color={companyStyle.primary} />
      <JobLocations locations={locations} color={companyStyle.secondary} hover={companyStyle.hover} />
    </StyledHeader>
  )
}