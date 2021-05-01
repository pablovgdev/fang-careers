import styled from "@emotion/styled";
import React, { MouseEvent } from "react";
import { normalizeTitle } from "../../../utils/util";

interface StyledTitleProps {
  color: string;
  hover: string
}

const StyledTitle = styled.div<StyledTitleProps>`
  h2 {
    display: inline-block;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: 0.5px;  
    color: ${props => props.color};
    @media (min-width: 768px) {
      transition: all .1s ease;
      padding: 0 10px;
      &:hover {
        background-color: ${props => props.hover};
      }
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
`;

interface JobTitleProps {
  title: string;
  url: string
  color: string;
  hover: string
}

export default function JobTitle({ title, url, color, hover }: JobTitleProps) {
  function clickTitle(event: MouseEvent) {
    event.stopPropagation();
  }

  return (
    <StyledTitle color={color} hover={hover}>
      <a href={url} onMouseDown={clickTitle} target="_blank">
        <h2>
          {normalizeTitle(title)}
        </h2>
      </a>
    </StyledTitle>
  )
}