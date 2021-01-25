import styled from "@emotion/styled";
import React, { FormEvent, useContext } from "react";
import { Tag } from "../../../models/tags";
import { JobsContext } from "../jobs-context";

const StyledJobSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    border-radius: 5px;
  }
`;

const StyledJobSearchInput = styled.input`
  outline: none;
  border: none;
  padding: 5px 10px;
  width: 100%;
  font-size: 18px;
  @media (min-width: 768px) {
    border-radius: 5px;
  }
`;

export default function JobSearchInput() {
  const {
    tags,
    tagsFilter,
    setTagsFilter,
    setOptions,
    query,
    setQuery,
    setTitle
  } = useContext(JobsContext);

  function matchOptions(search: string): Tag[] {
    search = search.toUpperCase();
    const newOptions = tags.filter(tag => tag.value.startsWith(search));
    return newOptions;
  }

  function loseFocus() {
    setQuery("");
    setTitle("");
    setOptions([]);
  }

  function filterOptions(event: FormEvent<HTMLInputElement>) {
    const search = event.currentTarget.value;
    setQuery(search);

    if (search) {
      const newOptions = matchOptions(search);
      setOptions(newOptions);
    } else {
      setOptions([]);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newOptions = matchOptions(query);

    // No options matched -> Filter by title
    if (newOptions.length === 0 || !query) {
      setTitle(query);
      setOptions([]);
    } else if (newOptions.length > 0) { // One match -> Add tag to filters
      const newOption = newOptions[0];
      setQuery("");
      setTitle("");
      setOptions([]);

      if (!tagsFilter.find(tag => tag.value === newOption.value)) {
        const newTagsFilter = tagsFilter.concat(newOption);
        setTagsFilter(newTagsFilter);
      } else {
        const newTagsFilter = tagsFilter.filter(tag => tag.value !== newOption.value);
        setTagsFilter(newTagsFilter);
      }
    }
  }

  return (
    <StyledJobSearchForm onSubmit={submit}>
      <StyledJobSearchInput
        placeholder="Filter jobs..."
        type="text" value={query}
        onChange={filterOptions}
        onBlur={loseFocus}
      />
    </StyledJobSearchForm>
  );
}