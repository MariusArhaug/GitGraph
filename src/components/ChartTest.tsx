// import { ICommit } from './../content/types'
import React from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import _ from 'lodash'
import { APILoader } from './../APILoader'

export function Charts() {

const loader = new APILoader()

// eslint-disable-next-line @typescript-eslint/no-unused-vars

    const getCommits = async() => await loader.getCommits()
    .then((result) => {
      return result
    })
    .catch((err) => {
      console.error(err)
    })

  console.warn(getCommits())


  // const commitsPrPerson = _.groupBy(getCommits(), 'committer_name')



  // const dummy = [
  //     {
  //       name: '25/09/21',
  //       Ole_Alexander_Høyby: 0,
  //       Marius_Arhaug: 1,
  //       patrick_helvik_legendre: 0,
  //       Stefan_Djordje_Tomic: 1,
  //     },
  //   ];

  return (
    <div>
      {/* <LineChart
                    width={500}
                    height={300}
                    data={value} //here we have to have same data as in dummy [{date: date, name_of_person: nb of commits}] maybe make a new list with all that data
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                  
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={commit.created_at} />
                <YAxis allowDecimals={false}/>
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  dataKey = {commit.committer_name}
                />
              </LineChart> */}
    </div>
  )
}
