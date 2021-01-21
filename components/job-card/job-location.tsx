import styled from "@emotion/styled";
import React from "react";

interface StyledLocationProps {
  color: string;
}

const StyledLocation = styled.p<StyledLocationProps>`
  font-size: 14px;
  color: ${props => props.color};
`;

interface JobLocationProps {
  location: string;
  color: string;
}

export default function JobLocation({ location, color }: JobLocationProps) {
  return (
    <StyledLocation color={color}>
      {location}
    </StyledLocation>
  )
}