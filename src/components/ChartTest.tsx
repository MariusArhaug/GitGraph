import React, {useEffect, useState} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from '../http-common'
import { ICommit } from "../content/types";


export default function Charts() {
  const ICommit: ICommit[] = []

  const [commits, setCommits] = useState(ICommit)
  const [error, setError]: [string, (error: string) => void] = useState('')

  useEffect(() => {
    getCommits()
  })

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

/*
const dummy = [
    {
      name: '19/09/21',
      Ole_Alexander_Høyby: 1,
      Marius_Arhaug: 1,
      patrick_helvik_legendre: 2,
      Stefan_Djordje_Tomic: 0,
    },
    {
      name: '20/09/21',
      Ole_Alexander_Høyby: 1,
      Marius_Arhaug: 1,
      patrick_helvik_legendre: 2,
      Stefan_Djordje_Tomic: 0,
    },
    {
      name: '21/09/21',
      Ole_Alexander_Høyby: 1,
      Marius_Arhaug: 1,
      patrick_helvik_legendre: 2,
      Stefan_Djordje_Tomic: 0,
    },
    {
      name: '22/09/21',
      Ole_Alexander_Høyby: 0,
      Marius_Arhaug: 3,
      patrick_helvik_legendre: 1,
      Stefan_Djordje_Tomic: 0,
    },
    {
      name: '23/09/21',
      Ole_Alexander_Høyby: 1,
      Marius_Arhaug: 0,
      patrick_helvik_legendre: 0,
      Stefan_Djordje_Tomic: 0,
    },
    {
      name: '24/09/21',
      Ole_Alexander_Høyby: 0,
      Marius_Arhaug: 1,
      patrick_helvik_legendre: 1,
      Stefan_Djordje_Tomic: 2,
    },
    {
      name: '25/09/21',
      Ole_Alexander_Høyby: 0,
      Marius_Arhaug: 1,
      patrick_helvik_legendre: 0,
      Stefan_Djordje_Tomic: 1,
    },
  ];

*/


export function ChartTest(){
    return (
      <div>
        {data.map((commits) =>)
          <li key={commits.id}>

          <p className="mt-1 mb-8">{issue.description}</p>
        </li>))}
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false}/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Ole_Alexander_Høyby"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Marius_Arhaug" stroke="#82ca9d" />
        <Line type="monotone" dataKey="patrick_helvik_legendre" stroke="#ff94c9"/>
        <Line type="monotone" dataKey="Stefan_Djordje_Tomic" stroke="#ffe552"/>
      </LineChart>
      {error && <p className="error">{error}</p>}
    </div>

    )
}
}

/*  
export default class ChartTest extends PureComponent{
    render() {
        return(
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        )
    }
}
*/