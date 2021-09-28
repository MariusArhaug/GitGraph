// https://docs.gitlab.com/ee/api/members.html
export interface IMember {
  id: number
  username: string
  name: string
}

// https://docs.gitlab.com/ee/api/issues.html
export interface IIssue {
  state: string
  description: string
  assignee: JSON
  closed_at: string
  id: number
  title: string
}

// https://docs.gitlab.com/ee/api/commits.html
export interface ICommit {
  short_id: string
  title: string
  committer_name: string
  created_at: string
  message: string
  web_url: string
}

//need to find a way to pass parameters id, all with_stats
export interface IICommit {
   id: number
   title: ""
   all : boolean
   with_stats : boolean
   
}

export interface IIContributors {
  id: number
  name: string
}