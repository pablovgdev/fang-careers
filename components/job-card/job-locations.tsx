import styled from "@emotion/styled";
import React from "react";
import JobLocation from "./job-location";

const StyledLocations = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

interface JobLocationsProps {
  locations: string[];
  color: string;
  hover: string;
}

export default function JobLocations({ locations, color, hover }: JobLocationsProps) {
  return (
    <StyledLocations>
      {locations.map((location, index) => <JobLocation location={location} color={color} hover={hover} key={index} />)}
    </StyledLocations>
  )
}