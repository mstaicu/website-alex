import React from 'react';

import { DesignProjectDetails, Loader } from '../../components';

const ProjectDetails = ({ projects, match: { params } }) => {
  if (!projects || projects.length === 0) {
    return <Loader />;
  }

  const project = projects.find(project => project.id === Number(params.id));

  if (project.category === 'DESIGN') {
    return <DesignProjectDetails project={project} />;
  }

  return <></>;
};

export default ProjectDetails;
