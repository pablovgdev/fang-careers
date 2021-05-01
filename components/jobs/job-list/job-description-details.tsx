import styled from "@emotion/styled";
import React from "react";
import { normalizeDate, normalizeLocations } from "../../../utils/util";

const StyledDescriptionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  padding-bottom: 20px;
`;

interface JobDescriptionDetailsProps {
  locations: string[];
  date: string
}

export default function JobDescriptionDetails({ locations, date }: JobDescriptionDetailsProps) {
  return (
    <StyledDescriptionDetails>
      <p>{normalizeLocations(locations)}</p>
      <p>{normalizeDate(date)}</p>
    </StyledDescriptionDetails>
  )
}