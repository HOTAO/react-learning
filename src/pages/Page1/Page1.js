import React from 'react'
import './Pages.css'
import image from 'images/test.png'

export default class Page1 extends React.Component {
  render() {
    return (
      <div className="page-box">
        this is Page1~
        <img src={image}/>
      </div>
    )
  }
}
