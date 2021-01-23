import styled from "@emotion/styled";
import React from "react";


const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 20px 20px;
`;

interface StyledLogoProps {
  hover: string;
}

const StyledLogo = styled.div<StyledLogoProps>`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  img {
    width: 60px;
    height: 60px;
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
    <StyledLogoContainer>
      <StyledLogo hover={hover}>
        <img src={src} alt="logo" />
      </StyledLogo>
    </StyledLogoContainer>
  )
}