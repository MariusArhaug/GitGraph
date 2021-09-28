export interface IIssue {
  id: number
  title: string
  description: string
  state: string;
  milestone?: IMilestone;
  labels: Array<string>
  closed_by?: IUser;
  assignees?: IUser;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
}

export interface ICommit {
  id: string;
  tag: string;
  description?: string;
}

export interface IMilestone {
  id: number;
  project_id: number;
  title: string;
  state: string;
}
