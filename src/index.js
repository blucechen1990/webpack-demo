import css from './css/index.css'
import bluecss from './css/test.css'
import less1 from './css/test1.less'
import {fn} from '@js/test.js'


import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
console.log(less1)

fn();

ReactDom.render(
  <App/>,
  document.getElementById('root')
)