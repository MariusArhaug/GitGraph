import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Main from './Main';
import { Layout } from './components'

render(
  <Layout>
    <Main />
  </Layout>,
  document.getElementById('root') as HTMLElement
)