import styled from "@emotion/styled";
import React, { MouseEvent } from "react";
import { CompanyStyle } from "../../../models/company-style";
import { Job } from "../../../models/job";
import JobLogo from "./job-logo";
import JobMain from "./job-main";

interface StyledContentProps {
  open: boolean;
}

const StyledContent = styled.div<StyledContentProps>`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid gray;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    border-radius: 5px;
    border: none;
    border-bottom-left-radius: ${props => props.open ? "0px" : "5px"};
    border-bottom-right-radius:${props => props.open ? "0px" : "5px"};
  }
`;

interface JobContentProps {
  job: Job;
  companyStyle: CompanyStyle;
  open: boolean;
  onMouseDown: (event: MouseEvent) => void;
}

export default function JobContent({ job, companyStyle, open, onMouseDown }: JobContentProps) {
  return (
    <StyledContent open={open} onMouseDown={onMouseDown}>
      <JobLogo src={companyStyle.logo} hover={companyStyle.hover} company={job.company} />
      <JobMain job={job} companyStyle={companyStyle} />
    </StyledContent>
  );
}