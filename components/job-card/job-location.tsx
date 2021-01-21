import styled from "@emotion/styled";
import React, { useContext } from "react";
import { JobsContext } from "../jobs-context";

interface StyledLocationProps {
  color: string;
  hover: string;
}

const StyledLocation = styled.div<StyledLocationProps>`
  font-size: 14px;
  border-radius: 5px;
  color: ${props => props.color};
  padding-right: 10px;
  @media (min-width: 768px) {
    transition: all .1s ease;
    padding: 0 10px;
    &:hover {
      background-color: ${props => props.hover};
    }
  }
`;

interface JobLocationProps {
  location: string;
  color: string;
  hover: string;
}

export default function JobLocation({ location, color, hover }: JobLocationProps) {
  const { tagsFilter, setTagsFilter } = useContext(JobsContext);

  return (
    <StyledLocation color={color} hover={hover}>
      {location}
    </StyledLocation>
  )
}