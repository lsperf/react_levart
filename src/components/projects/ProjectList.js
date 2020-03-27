import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  const projectList = projects.map(project => 
      <ProjectSummary project={project} key={project.id} />
  )
  
  return(
    <div className="project-list section">
      {projectList}
      {/* { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })} */}
    </div>
  )
}

export default ProjectList