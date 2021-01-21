import styled from "@emotion/styled";
import React from "react";
import ReactHtmlParser from "react-html-parser";

interface StyledTitleProps {
  color: string;
}

const StyledTitle = styled.h2<StyledTitleProps>`
  font-size: 16px;
  color: ${props => props.color};
`;

interface JobTitleProps {
  title: string;
  color: string;
}

export default function JobTitle({ title, color }: JobTitleProps) {
  function parseTitle(title: string) {
    title = title.split(",")[0];
    title = title.split(" -")[0];
    title = title.split(" –")[0];
    title = title.split(" (")[0];
    return title;
  }

  return (
    <StyledTitle color={color}>
      {ReactHtmlParser(parseTitle(title))}
    </StyledTitle>
  )
}