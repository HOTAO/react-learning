import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteWithSubRoutes from 'router/RouteWithSubRoutes'

class ResumeList extends Component {
  render() {
    return (
      <div>
        {['简历1', '简历2', '简历3'].map((item, index) => {
          return ( <p key={index}><Link to={`/resumeList/${index}`} key={index}>{item}</Link></p> )
        })}
      </div>
    );
  }
}

export default ResumeList;
