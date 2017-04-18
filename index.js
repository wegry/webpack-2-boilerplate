import './css/main.scss'
import 'core-js'

import Demo from './Demo'
import React from 'react'
import ReactDom from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  const appNode = document.querySelector('.app-node')

  ReactDom.render(<Demo />, appNode)
})
