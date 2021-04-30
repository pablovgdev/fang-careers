import styled from "@emotion/styled";
import React from "react";
import { Job } from "../../../models/job";
import { dateFormat } from "../../../utils/util";

const StyledDescriptionDetails = styled.div`
`;

interface JobDescriptionDetailsProps {
  job: Job;
}

export default function JobDescriptionDetails({ job }: JobDescriptionDetailsProps) {
  return (
    <StyledDescriptionDetails>
      <p>Locations: {job.locations.join(", ")}</p>
      <p>Url: {job.url}</p>
      <p>Date: {dateFormat(job.date)}</p>
    </StyledDescriptionDetails>
  )
}