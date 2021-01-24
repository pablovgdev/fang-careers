import styled from "@emotion/styled";
import React, { useContext } from "react";
import { Tag } from "../../models/tags";
import { JobsContext } from "../jobs-context";

const StyledJobSearchTag = styled.div`
  background-color: gray;
  color: white;
  font-weight: 700;
  padding: 0 6px;
  letter-spacing: 0.3px;
  font-size: 12px;
  padding: 2px 6px;
  margin: 2.5px;
  cursor: pointer;
  @media (min-width: 768px) {
    border-radius: 5px;
  }
`;

interface JobSearchTagProps {
  tag: Tag;
}

export default function JobSearchTag({ tag }: JobSearchTagProps) {
  const { tagsFilter, setTagsFilter } = useContext(JobsContext);

  function toggleTag() {
    const newTags = tagsFilter.filter(tagFilter => tagFilter.value !== tag.value);
    setTagsFilter(newTags);
  }

  return (
    <StyledJobSearchTag onClick={toggleTag}>
      {tag.value}
    </StyledJobSearchTag>
  );
}