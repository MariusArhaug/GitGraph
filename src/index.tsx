import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Main from './Main';
import { Layout } from './components'
import 'font-awesome/css/font-awesome.min.css';

render(
  <Layout>
    <Main />
  </Layout>,
  document.getElementById('root') as HTMLElement
)