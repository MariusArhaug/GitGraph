import React, { useEffect, useState } from 'react'
import { IIssue, IMember, ICommit } from './types'
import axios from '../http-common'

export default function FetchData() {
  const IMember: IMember[] = []
  const IIssue: IIssue[] = []
  const ICommit: ICommit[] = []

  const [members, setMembers] = useState(IMember)
  const [issues, setIssues] = useState(IIssue)
  const [commits, setCommits] = useState(ICommit)
  const [error, setError]: [string, (error: string) => void] = useState('')

  useEffect(() => {
    console.warn('test')
    getMembers()
    getIssues()
    getCommits()
  })
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const getMembers = () => {
    axios
      .get<IMember[]>('repository/contri')
      .then((response) => {
        setMembers(response.data)
      })
      .catch((error: Error) => {
        console.error('ERROR:', error.message)
        setError(error.message)
      })
  }

  const getIssues = () => {
    axios
      .get<IIssue[]>('issues')
      .then((response) => {
        setIssues(response.data)
      })
      .catch((error: Error) => {
        console.error('ERROR:', error.message)
        setError(error.message)
      })
  }

  const getCommits = () => {
    axios
      .get<ICommit[]>('repository/commits')
      .then((response) => {
        setCommits(response.data)
      })
      .catch((error: Error) => {
        console.error('ERROR:', error.message)
        setError(error.message)
      })
  }

  return (
    <div className="w-3/6 m-auto text-center">
      <ul className="posts">
        {members.map((member) => (
          <li key={member.id}>
            <h3>{member.username}</h3>
            <p className="mt-1 mb-8">{member.name}</p>
          </li>
        ))}

        {issues.map((issue) => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p className="mt-1 mb-8">{issue.description}</p>
            <p className="mt-1 mb-8">{issue.closed_at}</p>
          </li>
        ))}

        {commits.map((commit) => (
          <li key={commit.short_id}>
            <h3>{commit.title}</h3>
            <p className="mt-1 mb-8">{commit.committer_name}</p>
            <p className="mt-1 mb-8">{commit.created_at}</p>
            <p className="mt-1 mb-8">{commit.message}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
