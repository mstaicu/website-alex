import React from 'react';
import { useTranslation } from 'react-i18next';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import styled from '@emotion/styled';

import { Frame } from '../Frame';

export const ProjectDetails = ({
  project: {
    date,
    content: {
      project: { name, client, team, details },
    },
    media: { headerUrl, videoUrls, jpgUrls, jsonUrls },
  },
}) => {
  const { t } = useTranslation();

  const [firstProjectDetail, ...restOfDetails] = details;

  return (
    <Wrapper>
      <Frame ratio="31:6">
        {/* TODO: Implement a component that shows a loader prefetching the image */}
        <Image src={headerUrl} />
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
            <Row>
              <Label>{t('project.details.design.client')}</Label>
              <Value>{client}</Value>
            </Row>
          )}

          {date && (
            <Row>
              <Label>{t('project.details.design.date')}</Label>
              <Value>
                {new Date(date).toLocaleDateString(navigator.language)}
              </Value>
            </Row>
          )}

          {team && (
            <Row>
              <Label>{t('project.details.design.team')}</Label>
              <Value>{team}</Value>
            </Row>
          )}
        </DetailSectionRight>
      </DetailSection>

      {restOfDetails.map((detail, index) => (
        <ProjectDetail key={index}>{detail}</ProjectDetail>
      ))}

      {videoUrls.map((videoUrl, index) => (
        <Frame key={`${videoUrl}${index}`} ratio="16:9">
          <ProjectVideo controls>
            <source src={videoUrl} type="video/mp4" />
            <p>Your browser doesn support HTML5 video.</p>
          </ProjectVideo>
        </Frame>
      ))}

      {jpgUrls.map((jpgUrl, index) => (
        <Image key={`${jpgUrl}${index}`} src={jpgUrl} />
      ))}

      <LottieAnimations>
        {jsonUrls.map((jsonUrl, index) => (
          <LottieAnimation key={`${jsonUrl}${index}`}>
            <Player
              loop
              src={jsonUrl}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls
                visible={true}
                buttons={['play', 'repeat', 'frame', 'debug']}
              />
            </Player>
          </LottieAnimation>
        ))}
      </LottieAnimations>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Image = styled('img')`
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
  font-size: clamp(1.5rem, 8vw - 2rem, 3rem);
  font-weight: normal;
`;

const ProjectMainDetail = styled.p`
  font-size: clamp(2rem, 8vw - 2rem, 2.5rem);
`;
const ProjectDetail = styled.p`
  font-size: clamp(2rem, 8vw - 2rem, 2.5rem);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Label = styled.p`
  font-size: clamp(1.5rem, 8vw - 2rem, 2rem);
  color: rgba(0, 0, 0, 0.5);
`;
const Value = styled.p`
  font-size: clamp(1.5rem, 8vw - 2rem, 2rem);
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const LottieAnimations = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
`;

const LottieAnimation = styled.div`
  flex-basis: 50%;
`;
