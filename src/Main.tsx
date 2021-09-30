/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import './styles/global.css'
import Content from './content/Content'
import { InfoBox } from './components/Infobox'
import { Charts } from './components/ChartTest'

export default function Main() {
  return (
    <div className="Main">
      <Charts />
      {console.warn("test")}

      <InfoBox>
        <Content />
      </InfoBox>
    </div>
  )
}
