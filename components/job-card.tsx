import styled from "@emotion/styled";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Job } from "../models/job";
import { getCompanyStyle } from "../utils/util";
import TagLabel from "./tag-label";

interface StyledJobCardProps {
  background: string;
}

const StyledJobCard = styled.div<StyledJobCardProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  background-color: ${props => props.background};
  @media (min-width: 768px) {
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all .5s ease;
  }
`;

interface StyledHeaderProps {
  open: boolean;
}

const StyledHeader = styled.div<StyledHeaderProps>`
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid gray;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    border-radius: 5px;
    border: none;
    border-bottom-left-radius: ${props => props.open ? "0px" : "5px"};
    border-bottom-right-radius:${props => props.open ? "0px" : "5px"};
  }
`;

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

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    border-radius: 5px;
    width: 100%;
    flex-direction: row;
  }
`;

const StyledSection = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    border-radius: 5px;
    width: 60%;
  }
`;

interface StyledTitleProps {
  color: string;
}

const StyledTitle = styled.h2<StyledTitleProps>`
  font-size: 16px;
  color: ${props => props.color};
`;

interface StyledLocationProps {
  color: string;
}

const StyledLocation = styled.p<StyledLocationProps>`
  font-size: 14px;
  color: ${props => props.color};
`;

const StyledTags = styled.div`
  margin: 0 20px 20px 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (min-width: 768px) {
    border-radius: 5px;
    width: 40%;
    margin: 20px;
  }
`;

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

interface JobProps {
  job: Job;
}

export default function JobCard({ job }: JobProps) {
  const location = job.locations.map(location => location.split(",")[0]).join(", ");
  const [open, setOpen] = useState(false);

  const companyStyle = getCompanyStyle(job.company);

  function parseTitle() {
    let title = job.title;
    title = title.split(",")[0];
    title = title.split(" -")[0];
    title = title.split(" –")[0];
    title = title.split(" (")[0];
    return title;
  }

  function toggleDescription() {
    setOpen(!open);
  };

  return (
    <StyledJobCard background={companyStyle.background}>
      <StyledHeader open={open} onClick={toggleDescription}>
        <StyledLogo>
          <img src={companyStyle.logo} alt="logo" />
        </StyledLogo>
        <StyledMain>
          <StyledSection>
            <StyledTitle color={companyStyle.primary}>
              {ReactHtmlParser(parseTitle())}
            </StyledTitle>
            <StyledLocation color={companyStyle.secondary}>
              {location}
            </StyledLocation>
          </StyledSection>
          <StyledTags>
            {job.tags.map(tag => <TagLabel tag={tag.value} companyStyle={companyStyle} key={tag.value} />)}
          </StyledTags>
        </StyledMain>
      </StyledHeader>
      <StyledDescription open={open}>
        {ReactHtmlParser(job.description)}
      </StyledDescription>
    </StyledJobCard>
  );
}