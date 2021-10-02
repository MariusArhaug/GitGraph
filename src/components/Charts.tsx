import React from 'react'
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from 'recharts'
import _ from 'lodash'
import { APILoader } from '../APILoader'
import { Commit, Contributor } from '../models'

interface IChartsState {
  loader: APILoader
  errorMessage: string
  commits: Commit[]
  contributors: Contributor[]
}
export class Charts extends React.Component<
  { loader: APILoader },
  IChartsState
> {
  constructor(props: { loader: APILoader }) {
    super(props)
    this.state = {
      commits: [],
      contributors: [],
      loader: props.loader,
      errorMessage: '',
    }
  }

  setCommits(commits: Commit[]) {
    this.setState({ commits })
  }

  setContributors(contributors: Contributor[]) {
    this.setState({ contributors })
  }

  setError(errorMessage: string) {
    this.setState({ errorMessage })
  }

  //commitsPrPerson = _.groupBy(this.state.commits, 'committer_name')

  componentDidMount() {
    void this.getCommits()
    void this.getContributors()
  }

  componentDidUpdate() {
    this.getLineChartData()
  }

  async getCommits(): Promise<void> {
    const response = await this.state.loader.getCommits()

    if (!response) {
      return
    }

    if (typeof response === 'string') {
      this.setError(response)
    } else {
      this.setCommits(response)
    }
  }

  async getContributors(): Promise<void> {
    const response = await this.state.loader.geContributors()

    if (!response) {
      return
    }

    if (typeof response === 'string') {
      this.setError(response)
    } else {
      this.setContributors(response)
    }
  }

  // const dummy = [
  //     {
  //       name: '25/09/21',
  //       Ole_Alexander_Høyby: 0,
  //       Marius_Arhaug: 1,
  //       patrick_helvik_legendre: 0,
  //       Stefan_Djordje_Tomic: 1,
  //     },
  //   ];

  //here we have to have same data as in dummy[{ date: date, name_of_person: nb of commits }] maybe make a new list with all that data
  getLineChartData() {
    const groupByDate: Record<string, Commit[]> = _.groupBy(
      this.state.commits,
      (commit: Commit) => {
        return commit.getCreatedAtDays()
      }
    )

    const contributorNames = this.state.contributors.map(
      (contributor: Contributor) => {
        return contributor.getName()
      }
    )

    return Object.entries(groupByDate).map(
      ([date, commits]: [string, Commit[]]) => {
        const lineChartValue: Record<string, number | string> = {
          "name": date
        }

        commits.forEach((commit: Commit) => {
          const userName = commit.getCommitterName()
          if (!(userName in lineChartValue)) {
            lineChartValue[userName] = 1
          } else {
            (lineChartValue[userName] as number)++
          }
        })

        contributorNames.forEach((name: string) => {
          if (!(name in lineChartValue)) {
            lineChartValue[name] = 0
          }
        })

        return lineChartValue
      }
    )
  }

  render() {
    const { commits } = this.state
    console.warn(this.getLineChartData())
    return (
      <div className="lol">
        <LineChart
          width={100}
          height={300}
          data={this.getLineChartData()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {commits.length &&
            this.getLineChartData().map((value) => (
              <>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={value.name} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                {value && Object.entries(value).filter((e) => e[0] !== 'name').map(
                  ([key, _value]: [string, string | number]) => (
                    <Line
                      type="monotone"
                      stroke="#8884d8" // random
                      activeDot={{ r: 8 }}
                      dataKey={key}
                    />
                  )
                )}
              </>
            ))}
        </LineChart>
      </div>
    )
  }
}