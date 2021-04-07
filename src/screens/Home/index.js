import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { HomeHeader as Header, ProjectCard } from '../../components';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    fetch('/data/manifest.json')
      .then(response => response.json())
      .then(setProjects);
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <>
      <Header onCategoryClick={setSelectedCategory} />
      <Wrapper>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
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
