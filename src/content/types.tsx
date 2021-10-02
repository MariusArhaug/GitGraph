export interface IGitLabIssue {
  id: number
  title: string
  description: string
  state: string;
  milestone?: IGitLabMilestone;
  labels: string[]
  closed_by?: IGitLabUser;
  assignees?: IGitLabUser[];
}

export interface IGitLabUser {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
}

export interface IGitLabCommit {
  map(arg0: (commit: IGitLabCommit) => import("../models").Commit): import("../models").Commit[];
  short_id: string
  title: string
  committer_name: string
  created_at: string
  message: string
  web_url: string
}

export interface IGitLabMilestone {
  id: number;
  project_id: number;
  title: string;
  state: string;
}

export interface IGitLabContributor {
  map(arg0: (contributor: IGitLabContributor) => import("../models").Contributor): import("../models").Contributor[];
  name: string
  email: string
  commits: number
}
