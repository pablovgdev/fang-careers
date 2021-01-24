import styled from "@emotion/styled";
import React, { MouseEvent, useContext } from "react";
import { Tag } from "../../../models/tags";
import { JobsContext } from "../jobs-context";

const StyledJobSearchOption = styled.div`
  width: 100%;
  padding: 2px 10px;
  border-top: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  @media (min-width: 768px) {
    &:hover {
      background-color: gray;
      color: white; 
    }
  }
`;

interface JobSearchOptionProps {
  tag: Tag;
}

export default function JobSearchOption({ tag }: JobSearchOptionProps) {
  const { tagsFilter, setTagsFilter, setQuery, setOptions } = useContext(JobsContext);

  function isSelected() {
    return !!tagsFilter.find(tagFilter => tagFilter.value === tag.value);
  }

  function toggleTag(event: MouseEvent) {
    event.stopPropagation();
    setQuery("");
    setOptions([]);

    if (isSelected()) {
      const newTags = tagsFilter.filter(tagFilter => tagFilter.value !== tag.value);
      setTagsFilter(newTags);
    } else {
      const newTags = tagsFilter.concat(tag);
      setTagsFilter(newTags);
    }
  }

  return (
    <StyledJobSearchOption onMouseDown={toggleTag}>
      {tag.value}
    </StyledJobSearchOption>
  );
}