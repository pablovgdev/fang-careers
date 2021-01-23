import styled from "@emotion/styled";
import React from "react";
import { CompanyStyle } from "../../models/company-style";

interface StyledTagProps {
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
  color: ${props => props.primary};
  @media (min-width: 768px) {
    &:hover {
      color: ${props => props.secondary};
      background-color: ${props => props.primary};
    }
  }
`;

interface JobTagProps {
  tag: string;
  companyStyle: CompanyStyle;
}

export default function JobTag({ tag, companyStyle }: JobTagProps) {
  return (
    <StyledTag
      key={tag}
      primary={companyStyle.primary}
      secondary={companyStyle.background}
    >
      {tag}
    </StyledTag>
  );
}