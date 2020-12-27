import React from "react";
import styles from "../styles/jobs-search.module.css";
import CompanyFilter from "./company-filter";
import LocationFilter from "./location-filter";
import TagSearch from "./tag-search";

export default function JobsSearch() {
	return (
		<div className={styles.jobSearch}>
			<div className={styles.filters}>
				<CompanyFilter />
				<LocationFilter />
			</div>
			<TagSearch />
		</div>
	);
}