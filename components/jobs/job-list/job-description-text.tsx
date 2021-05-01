import styled from "@emotion/styled";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const StyledDescriptionText = styled.div`
  p {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  h3 {
    margin-top: 20px;
  }
  ul {
    margin-bottom: 20px;
  }
  li {
    margin-left: 30px;
    margin-top: 10px;
  }
`;

interface JobDescriptionTextProps {
  description: string;
}

export default function JobDescriptionText({ description }: JobDescriptionTextProps) {
  return (
    <StyledDescriptionText>
      {ReactHtmlParser(description)}
    </StyledDescriptionText>
  )
}