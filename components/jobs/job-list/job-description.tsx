import styled from "@emotion/styled";
import React from "react";
import ReactHtmlParser from "react-html-parser";

interface StyledDescriptionProps {
  open: boolean;
}

const StyledDescription = styled.div<StyledDescriptionProps>`
  display: ${props => props.open ? "block" : "none"};
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid gray;
  p {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  h2 {
    margin-top: 20px;
  }
  ul {
    margin-bottom: 20px;
  }
  li {
    margin-left: 30px;
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
  }
`;

interface JobDescriptionProps {
  open: boolean;
  description: string;
}

export default function JobDescription({ open, description }: JobDescriptionProps) {
  return (
    <StyledDescription open={open}>
      {ReactHtmlParser(description)}
    </StyledDescription>
  )
}