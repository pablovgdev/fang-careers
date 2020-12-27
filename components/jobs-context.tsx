import { createContext, Dispatch, SetStateAction } from "react";
import { Job } from "../models/job";
import { Tag } from "../models/tags";

export interface JobsContext {
	jobs: Job[];
	locations: string[];
	companies: string[];
	locationFilter: string;
	setLocationFilter: Dispatch<SetStateAction<string>>;
	companyFilter: string;
	setCompanyFilter: Dispatch<SetStateAction<string>>;
	tags: string[];
	setTags: Dispatch<SetStateAction<string[]>>;
}

export const JobsContext = createContext({} as JobsContext);