import React, {useEffect, useState} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {ICommit} from '../content/types';
import axios from '../http-common'
import { AxiosError } from 'axios'
//import _ from 'lodash'

export function Charts() {
  const data = []
  const ICommit: ICommit[] = []
  const [commits, setCommits] = useState(ICommit)
  const [error, setError]: [string, (error: string) => void] = useState('')

  const commitsPrPerson = _.groupBy(commits, 'committer_name')


  useEffect(() => {
    getCommits()
    for (const key of ICommit){
      data.push({key:key.created_at, :key.committer_name})
    }
  }, [])

  const getCommits = () => {
    axios
      .get<ICommit[]>('repository/commits')
      .then((response) => {
        setCommits(response.data)
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          if (error.response.status === 429) {
            setError(`Status: ${error.response.status} - Too many requests`)
          } else {
            setError(error.response.data)
          }
          console.error(error.response)
        } else {
          console.error('ERROR:', error.message)
          setError(error.message)
        }
      })
  }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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





    return (
      <div>
              <LineChart
                  width={500}
                  height={300}
                  data={commits}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                  }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="created_at" />
              <YAxis allowDecimals={false}/>
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                dataKey = "committer_name"
              />
            </LineChart>
            {error && <p className="error">{error}</p>}
      </div>

    )

}
