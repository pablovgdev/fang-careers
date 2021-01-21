import styled from "@emotion/styled";
import React from "react";

interface StyledLogoProps {
  hover: string;
}

const StyledLogo = styled.div<StyledLogoProps>`
  display: flex;
  border-radius: 50%;
  margin: 20px 0 20px 20px;
  align-items: center;
  max-width: 60px;
  max-height: 60px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    transition: all .1s ease;
    &:hover {
      background-color: ${props => props.hover};
    }
  }
`;

interface JobLogoProps {
  src: string;
  hover: string;
}

export default function JobLogo({ src, hover }: JobLogoProps) {
  return (
    <StyledLogo hover={hover}>
      <img src={src} alt="logo" />
    </StyledLogo>
  )
}