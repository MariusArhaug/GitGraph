import React from "react";
import { IIssue } from "./types";
import { Issue } from "../models"


export default function IssueCard({ props }: { props: IIssue }) {

  const issue = new Issue({ ...props })

  return (
    <div>
      <li key={issue.getId()}>
        <h3>{issue.getTitle()}</h3>
        <p className="mt-1 mb-8">{issue.getDescription()}</p>
      </li>
    </div>
  )

}