import styled from "@emotion/styled";
import React, { MouseEvent, useContext } from "react";
import { TAG_TYPE } from "../../../models/tags";
import { JobsContext } from "../jobs-context";

interface StyledCountryProps {
  color: string;
  hover: string;
}

const StyledCountry = styled.div<StyledCountryProps>`
  font-size: 14px;
  border-radius: 5px;
  color: ${props => props.color};
  padding-right: 10px;
  @media (min-width: 768px) {
    transition: all .1s ease;
    padding: 0 10px;
    &:hover {
      background-color: ${props => props.hover};
    }
  }
`;

interface JobCountryProps {
  country: string;
  color: string;
  hover: string;
}

export default function JobCountry({ country, color, hover }: JobCountryProps) {
  const { tagsFilter, setTagsFilter } = useContext(JobsContext);

  function isSelected() {
    return !!tagsFilter.find(tagFilter => tagFilter.value === country.toUpperCase());
  }

  function toggleTag(event: MouseEvent) {
    event.stopPropagation();

    if (isSelected()) {
      const newTags = tagsFilter.filter(tagFilter => tagFilter.value !== country.toUpperCase());
      setTagsFilter(newTags);
    } else {
      const newTags = tagsFilter.concat({ value: country.toUpperCase(), type: TAG_TYPE.LOCATION });
      setTagsFilter(newTags);
    }
  }

  return (
    <StyledCountry color={color} hover={hover} onMouseDown={toggleTag}>
      {country}
    </StyledCountry>
  )
}