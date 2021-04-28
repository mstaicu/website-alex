import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { HomeHeader as Header, ProjectCard } from '../../components';

const Home = () => {
  const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(setProjects);
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const onClick = ({ id }) => history.push(`/project/${id}`);

  return (
    <>
      <Header onCategoryClick={setSelectedCategory} />
      <Wrapper>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onClick(project)}
          />
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div')`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
