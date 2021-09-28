export interface IIssue {
  id: number
  title: string
  description: string
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