import React from "react";
import styles from "../styles/jobs-search.module.css";
import TagsSearch from "./tags-search";

export default function JobsSearch() {
	return (
		<div className={styles.jobSearch}>
			<TagsSearch />
		</div>
	);
}