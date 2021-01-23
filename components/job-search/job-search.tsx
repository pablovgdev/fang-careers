import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ValueType, OptionTypeBase } from "react-select";
import { Job } from "../../models/job";
import { JobsContext } from "../jobs-context";

const StyledJobSearch = styled.input`
 
`;

interface JobSearchProps {
  job: Job;
}

export default function JobSearch({ job }: JobSearchProps) {
  const { tags, setTagsFilter } = useContext(JobsContext);

  const options = tags.map(tag => ({ value: tag, label: tag }));

  function onChange(value: ValueType<OptionTypeBase, true>) {
    if (value?.length) {
      const newTags = value.map(item => item.label);
      setTagsFilter(newTags);
    } else {
      setTagsFilter([]);
    }
  }

  return (
    <StyledJobSearch >

    </StyledJobSearch >
  );

  // return (
  //   <Select
  //     placeholder="Tags"
  //     inputId="tags"
  //     options={options}
  //     styles={reactSelectStyles}
  //     isClearable={true}
  //     isMulti={true}
  //     onChange={onChange}
  //   />
  // );
}