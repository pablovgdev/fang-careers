import styled from "@emotion/styled";
import React, { useContext } from "react";
import { CompanyStyle } from "../../models/company-style";
import { JobsContext } from "../jobs-context";

interface StyledTagProps {
  selected: boolean;
  primary: string;
  secondary: string;
}

const StyledTag = styled.span<StyledTagProps>`
  border-radius: 5px;
  border: 2px solid;
  font-size: 12px;
  padding: 0 6px;
  font-weight: 700;
  margin: 0 5px 5px 0;
  letter-spacing: 0.3px;
  height: 30px;
  border-color: ${props => props.primary};
  color: ${props => props.selected ? props.secondary : props.primary};
  background-color: ${props => props.selected ? props.primary : "transparent"};
  @media (min-width: 768px) {
    &:hover {
      color: ${props => props.selected ? props.primary : props.secondary};
      background-color: ${props => props.selected ? props.secondary : props.primary};
    }
  }
`;

interface JobTagProps {
  tag: string;
  companyStyle: CompanyStyle;
}

export default function JobTag({ tag, companyStyle }: JobTagProps) {
  const { tagsFilter } = useContext(JobsContext);

  function isSelected() {
    return tagsFilter.includes(tag);
  }

  return (
    <StyledTag
      key={tag}
      selected={isSelected()}
      primary={companyStyle.primary}
      secondary={companyStyle.background}
    >
      {tag}
    </StyledTag>
  );
}