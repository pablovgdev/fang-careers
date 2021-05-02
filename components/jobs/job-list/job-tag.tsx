import styled from "@emotion/styled";
import React, { MouseEvent, useContext } from "react";
import { CompanyStyle } from "../../../models/company-style";
import { Tag } from "../../../models/tags";
import { JobsContext } from "../jobs-context";

interface JobTagProps {
  tag: Tag;
  companyStyle: CompanyStyle;
}

interface StyledTagProps {
  primary: string;
  secondary: string;
}

export default function JobTag({ tag, companyStyle }: JobTagProps) {
  const { tagsFilter, setTagsFilter } = useContext(JobsContext);

  function isSelected() {
    return !!tagsFilter.find(tagFilter => tagFilter.value === tag.value);
  }

  function toggleTag(event: MouseEvent) {
    event.stopPropagation();

    if (isSelected()) {
      const newTags = tagsFilter.filter(tagFilter => tagFilter.value !== tag.value);
      setTagsFilter(newTags);
    } else {
      const newTags = tagsFilter.concat(tag);
      setTagsFilter(newTags);
    }
  }

  const StyledTag = styled.div<StyledTagProps>`
    border-radius: 5px;
    border: 2px solid;
    margin: 2.5px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3px;
    height: 30px;
    border-color: ${props => props.primary};
    color: ${props => isSelected() ? props.secondary : props.primary};
    background-color: ${props => isSelected() ? props.primary : props.secondary};
    @media (min-width: 768px) {
      transition: all .1s ease;
      &:hover {
        color: ${props => props.secondary};
        background-color: ${props => props.primary};
      }
    }
  `;

  return (
    <StyledTag
      primary={companyStyle.primary}
      secondary={companyStyle.background}
      onMouseDown={toggleTag}
    >
      {tag.value}
    </StyledTag>
  );
}