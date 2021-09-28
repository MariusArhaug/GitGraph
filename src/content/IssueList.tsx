import React, { useState, useEffect } from "react";
import { APILoader } from './GitLabAPILoader'
import IssueCard from "./IssueCard";
import { Issue } from "../models";

export default function IssueList() {
  const defaultIssue: Issue[] = []

  const [issues, setIssues] = useState(defaultIssue)
  const [error, setError] = useState<string>('')

  const loader = new APILoader();

  useEffect(() => {
    void getIssues()
  })

  const getIssues = async () => {
    const response = await loader.getIssues()
    if (response) {
      setIssues(response)
    } else {
      setError('Something went wrong')
    }
  }
  return (
    <div className="w-3/6 m-auto text-center">
      {issues.map((issue: Issue) => (
        <IssueCard {...issue} />
      ))}
      {error && <p className="error">{error}</p>}
    </div>)
}