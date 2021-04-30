import styled from "@emotion/styled";
import React from "react";
import ReactHtmlParser from "react-html-parser";

interface StyledTitleProps {
  color: string;
}

const StyledTitle = styled.h2<StyledTitleProps>`
  font-size: 16px;
  letter-spacing: 0.5px;  
  color: ${props => props.color};
  @media (min-width: 768px) {
    padding-left: 10px;
  }
`;

interface JobTitleProps {
  title: string;
  color: string;
}

export default function JobTitle({ title, color }: JobTitleProps) {
  return (
    <StyledTitle color={color}>
      {ReactHtmlParser(title)}
    </StyledTitle>
  )
}