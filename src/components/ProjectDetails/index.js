import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

import { Frame } from '../Frame';

export const ProjectDetails = ({
  project: {
    date,
    content: {
      project: { name, client, team, details },
    },
    media: { headerUrl },
  },
}) => {
  const { t } = useTranslation();

  const [firstProjectDetail, ...restOfDetails] = details;

  return (
    <Wrapper>
      <Frame ratio="31:6">
        {/* TODO: Implement a component that shows a loader prefetching the image */}
        <Header src={headerUrl} />
      </Frame>

      <DetailSection>
        <DetailSectionLeft>
          <ProjectTitle>
            {t('project.details.design.title')}: {name}
          </ProjectTitle>
          <ProjectMainDetail>{firstProjectDetail}</ProjectMainDetail>
        </DetailSectionLeft>
        <DetailSectionRight>
          {client && (
            <ProjectClient>
              {t('project.details.design.client')}: {client}
            </ProjectClient>
          )}

          {date && (
            <ProjectDate>
              {t('project.details.design.date')}:{' '}
              {new Date(date).toLocaleDateString(navigator.language)}
            </ProjectDate>
          )}

          {team && (
            <ProjectTeam>
              {t('project.details.design.team')}: {team}
            </ProjectTeam>
          )}
        </DetailSectionRight>
      </DetailSection>

      {restOfDetails.map((detail, index) => (
        <ProjectDetail key={index}>{detail}</ProjectDetail>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled('img')`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const DetailSection = styled.div`
  display: grid;

  grid-template-rows: auto;

  /**
   * On small devices, i.e. < 650px width, we create 3 equal columns
   */
  grid-template-columns: repeat(1, 1fr);

  @media only screen and (min-width: 650px) {
    /**
     * On larger devices, i.e. > 650px with, we create 2 equal columns
     */
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DetailSectionLeft = styled.div`
  /**
   * On small devices, i.e. < 650px width
   */
  grid-column: 1 / 1;

  @media only screen and (min-width: 650px) {
    /**
     * On larger devices, i.e. > 650px with
     */
    grid-column: 1 / 3;
  }
`;

const DetailSectionRight = styled.div`
  /**
   * On small devices, i.e. < 650px width
   */
  grid-column: 1 / 1;

  @media only screen and (min-width: 650px) {
    margin-left: 4rem;

    /**
     * On larger devices, i.e. > 650px with
     */
    grid-column: 3 / 3;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
`;

const ProjectMainDetail = styled.p`
  font-size: 2rem;
`;

const ProjectDetail = styled.p`
  font-size: 2rem;
`;

const ProjectClient = styled.p`
  font-size: 1.5rem;
`;

const ProjectDate = styled.p`
  font-size: 1.5rem;
`;

const ProjectTeam = styled.p`
  font-size: 1.5rem;
`;
