import styled from "@emotion/styled";
import Image from 'next/image';
import React, { MouseEvent, useContext } from "react";
import { TAG_TYPE } from "../../../models/tags";
import { JobsContext } from "../jobs-context";

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 20px 20px;
`;

interface StyledLogoProps {
  hover: string;
}

const StyledLogo = styled.div<StyledLogoProps>`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  img {
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    transition: all .1s ease;
    &:hover {
      background-color: ${props => props.hover};
    }
  }
`;

interface JobLogoProps {
  src: string;
  hover: string;
  company: string;
}

export default function JobLogo({ src, hover, company }: JobLogoProps) {
  const { tagsFilter, setTagsFilter } = useContext(JobsContext);

  function isSelected() {
    return !!tagsFilter.find(tagFilter => tagFilter.value === company);
  }

  function toggleTag(event: MouseEvent) {
    event.stopPropagation();

    if (isSelected()) {
      const newTags = tagsFilter.filter(tagFilter => tagFilter.value !== company);
      setTagsFilter(newTags);
    } else {
      const newTags = tagsFilter.concat({ value: company, type: TAG_TYPE.COMPANY });
      setTagsFilter(newTags);
    }
  }

  return (
    <StyledLogoContainer>
      <StyledLogo hover={hover} onMouseDown={toggleTag}>
        <Image src={"/" + src} alt="logo" width="60" height="60" />
      </StyledLogo>
    </StyledLogoContainer>
  )
}