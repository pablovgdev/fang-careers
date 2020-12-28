import { createContext, Dispatch, SetStateAction } from "react";
import { Job } from "../models/job";

export interface JobsContext {
	jobs: Job[];
	companies: string[];
	locations: string[];
	tags: string[];
	locationFilter: string;
	setLocationFilter: Dispatch<SetStateAction<string>>;
	companyFilter: string;
	setCompanyFilter: Dispatch<SetStateAction<string>>;
	tagsFilter: string[];
	setTagsFilter: Dispatch<SetStateAction<string[]>>;
}

export const JobsContext = createContext({} as JobsContext);