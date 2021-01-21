import styled from "@emotion/styled";
import React from "react";


const StyledLogo = styled.div`
  display: flex;
  margin: 20px 0 20px 20px;
  align-items: center;
`;

interface StyledLogoProps {
  hover: string;
}

const StyledLogoContainer = styled.div<StyledLogoProps>`
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
    <StyledLogo>
      <StyledLogoContainer hover={hover}>
        <img src={src} alt="logo" />
      </StyledLogoContainer>
    </StyledLogo>
  )
}