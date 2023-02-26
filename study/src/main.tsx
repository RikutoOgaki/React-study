import React from 'react'
import ReactDOM from 'react-dom/client'
import Sample01 from './sample/01/sample01'
import Sample02 from './sample/02/sample02'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Sample01 /> */}
    <Sample02/>
  </React.StrictMode>,
)
