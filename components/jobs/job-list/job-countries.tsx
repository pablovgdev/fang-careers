import styled from "@emotion/styled";
import React from "react";
import JobCountry from "./job-country";

const StyledCountries = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

interface JobCountriesProps {
  countries: string[];
  color: string;
  hover: string;
}

export default function JobCountries({ countries, color, hover }: JobCountriesProps) {
  return (
    <StyledCountries>
      {countries.map((country, index) => <JobCountry country={country} color={color} hover={hover} key={index} />)}
    </StyledCountries>
  )
}