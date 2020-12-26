import { createContext, Dispatch, SetStateAction } from "react";
import { Job } from "../models/job";
import { Tag } from "../models/tags";

export interface JobsContext {
	jobs: Job[];
	setJobs: Dispatch<SetStateAction<Job[]>>;
	tags: Tag[];
	setTags: Dispatch<SetStateAction<Tag[]>>;
}

export const JobsContext = createContext({} as JobsContext);