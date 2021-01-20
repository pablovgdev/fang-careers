import styled from "@emotion/styled";
import React from "react";
import CompanyFilter from "./company-filter";
import LocationFilter from "./location-filter";
import TagSearch from "./tag-search";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  &>div {
  	width: 100%;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    &>div:nth-of-type(1) {
      border-right: 1px solid gray;
    }
  }
  @media (min-width: 769px) {
    margin-bottom: 10px;
    &>div:nth-of-type(1) {
      margin-right: 5px;
      border: none;
    }
    &>div:nth-of-type(2) {
      margin-left: 5px;
    }
  }
`;

export default function JobsSearch() {
  return (
    <div>
      <StyledFilters>
        <CompanyFilter />
        <LocationFilter />
      </StyledFilters>
      <TagSearch />
    </div>
  );
}