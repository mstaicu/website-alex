import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

import { Frame } from '../Frame';

export const DesignProjectDetails = ({
  project: {
    name,
    date,
    media: { headerUrl },
  },
}) => {
  const { t } = useTranslation();

  return (
    <Page>
      <Frame ratio="31:6">
        <Header src={headerUrl} />
      </Frame>

      <DetailSection>
        <DetailSectionLeft>
          <ProjectTitle>
            {t('project.details.design.title')}: {name}
          </ProjectTitle>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor ac eros vitae tincidunt. Nunc interdum odio id ullamcorper
            volutpat. Maecenas consectetur dictum nibh at consequat. Aenean ut
            orci ut eros tempor interdum at fringilla nunc. In accumsan risus ut
            accumsan laoreet. Etiam purus risus, facilisis in porttitor quis,
            molestie ut erat. Morbi pellentesque elit risus, id posuere augue
            maximus vitae. Sed sit amet mi a diam efficitur vestibulum eget a
            quam.
          </ProjectDescription>
        </DetailSectionLeft>
        <DetailSectionRight>
          <ProjectClient>
            {t('project.details.design.client')}: Lore
          </ProjectClient>

          <ProjectDate>
            {t('project.details.design.date')}: {date}
          </ProjectDate>

          <ProjectTeam>{t('project.details.design.team')}: FCSB</ProjectTeam>
        </DetailSectionRight>
      </DetailSection>

      <ProjectSecondDescription>
        Maecenas sagittis nunc non tortor commodo mattis. Etiam ante neque,
        rhoncus id orci in, faucibus fringilla risus. Donec sit amet risus at
        urna hendrerit feugiat. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Etiam porttitor, nunc in
        ullamcorper viverra, justo odio facilisis turpis, tempus venenatis velit
        velit vel nunc. Donec vel molestie arcu, non sollicitudin leo. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nunc ante turpis,
        feugiat eget bibendum in, suscipit at neque. Maecenas purus nunc, varius
        hendrerit dolor quis, commodo pharetra nisl.
      </ProjectSecondDescription>
    </Page>
  );
};

const Page = styled.div``;

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
  font-size: 3rem;
  font-weight: normal;
`;

const ProjectDescription = styled.p`
  font-size: 2rem;
`;

const ProjectSecondDescription = styled.p`
  font-size: 1.5rem;
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
