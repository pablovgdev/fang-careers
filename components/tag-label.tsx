import React, { useContext } from "react";
import { CompanyStyle } from "../models/company-style";
import styles from "../styles/tag-label.module.css";
import { JobsContext } from "./jobs-context";

interface TagProps {
  tag: string,
  companyStyle: CompanyStyle
}

export default function TagLabel({ tag, companyStyle }: TagProps) {
  const { tagsFilter } = useContext(JobsContext);

  function isSelected() {
    return tagsFilter.includes(tag);
  }

  return (
    <span
      className={styles.tagLabel}
      style={{
        borderColor: companyStyle.primary,
        color: isSelected() ? companyStyle.background : companyStyle.primary,
        backgroundColor: isSelected() ? companyStyle.primary : companyStyle.background
      }}
      key={tag}
    >
      {tag}
    </span>
  );
}