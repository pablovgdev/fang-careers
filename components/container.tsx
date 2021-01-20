import styled from "@emotion/styled";
import React from "react";
import { ChildrenProps } from "../models/props";

const StyledContainer = styled.div`
  width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;

export default function Container({ children }: ChildrenProps) {
  return <StyledContainer>{children}</StyledContainer>
}