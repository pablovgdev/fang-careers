import styled from "@emotion/styled";
import React from "react";
import { CompanyStyle } from "../../models/company-style";
import { Job } from "../../models/job";
import { TAG_TYPE } from "../../models/tags";
import JobTag from "./job-tag";

const StyledTags = styled.div`
  margin: 0 20px 20px 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (min-width: 768px) {
    border-radius: 5px;
    width: 40%;
    margin: 20px;
  }
`;

interface JobTagsProps {
  job: Job;
  companyStyle: CompanyStyle;
}

export default function JobTags({ job, companyStyle }: JobTagsProps) {
  return (
    <StyledTags>
      {
        job.tags
          .filter(tag => tag.type !== TAG_TYPE.COMPANY && tag.type !== TAG_TYPE.LOCATION)
          .map(tag => <JobTag tag={tag.value} companyStyle={companyStyle} key={tag.value} />)
      }
    </StyledTags>
  )
}