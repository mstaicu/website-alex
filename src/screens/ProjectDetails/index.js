import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Loader } from '../../components';

const ProjectDetails = ({ match }) => {
  const history = useHistory();

  const [projectDetails, setProjectDetails] = useState();

  useEffect(() => {
    fetch(`/data/projectDetails/${match.params.id}.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        history.push('/project/not-found');
      })
      .then(setProjectDetails);
  }, []);

  return projectDetails ? (
    <div>Project name {projectDetails.name}</div>
  ) : (
    <Loader />
  );
};

export default ProjectDetails;
