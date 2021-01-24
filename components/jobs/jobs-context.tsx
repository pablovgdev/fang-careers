import { createContext, Dispatch, SetStateAction } from "react";
import { Job } from "../../models/job";
import { Tag } from "../../models/tags";

export interface JobsContext {
  jobs: Job[];
  tags: Tag[];
  tagsFilter: Tag[];
  setTagsFilter: Dispatch<SetStateAction<Tag[]>>;
  options: Tag[];
  setOptions: Dispatch<SetStateAction<Tag[]>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

export const JobsContext = createContext({} as JobsContext);