import styled from "@emotion/styled";
import React, { MouseEvent, useContext } from "react";
import { TAG_TYPE } from "../../models/tags";
import { JobsContext } from "../jobs-context";

interface StyledLocationProps {
  color: string;
  hover: string;
}

const StyledLocation = styled.div<StyledLocationProps>`
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

interface JobLocationProps {
  location: string;
  color: string;
  hover: string;
}

export default function JobLocation({ location, color, hover }: JobLocationProps) {
  const { tagsFilter, setTagsFilter } = useContext(JobsContext);

  function isSelected() {
    return !!tagsFilter.find(tagFilter => tagFilter.value === location);
  }

  function toggleTag(event: MouseEvent) {
    event.stopPropagation();

    if (isSelected()) {
      const newTags = tagsFilter.filter(tagFilter => tagFilter.value !== location);
      setTagsFilter(newTags);
    } else {
      const newTags = tagsFilter.concat({ value: location, type: TAG_TYPE.LOCATION });
      setTagsFilter(newTags);
    }
  }

  return (
    <StyledLocation color={color} hover={hover} onClick={toggleTag}>
      {location}
    </StyledLocation>
  )
}