import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
  <span className="card-title">Project Title - {id}</span>
            <p>Some project details. Some project details. Some project details.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Artist</div>
          <div>1st March 2020, 2:20pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

