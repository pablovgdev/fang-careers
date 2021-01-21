import styled from "@emotion/styled";
import React from "react";

const StyledLogo = styled.div`
  display: flex;
  border-radius: 5px;
  margin: 20px 0 20px 20px;
  align-items: center;
  img {
    border-radius: 5px;
    width: 60px;
    height: 60px;
  }
`;

interface JobLogoProps {
  src: string;
}

export default function JobLogo({ src }: JobLogoProps) {
  return (
    <StyledLogo>
      <img src={src} alt="logo" />
    </StyledLogo>
  )
}