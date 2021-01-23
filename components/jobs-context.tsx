import { createContext, Dispatch, SetStateAction } from "react";
import { Job } from "../models/job";

export interface JobsContext {
  jobs: Job[];
  tags: string[];
  tagsFilter: string[];
  setTagsFilter: Dispatch<SetStateAction<string[]>>;
}

export const JobsContext = createContext({} as JobsContext);