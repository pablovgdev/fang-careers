import styled from "@emotion/styled";
import React from "react";
import JobsList from "./jobs-list";
import JobsSearch from "./jobs-search";

const StyledJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  @media (min-width: 768px) {
    padding: 20px;
    margin: 50px 0;
  }
`;

export default function JobsContainer() {
  return (
    <StyledJobsContainer>
      <JobsSearch />
      <JobsList />
    </StyledJobsContainer >
  );
}