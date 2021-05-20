import React from 'react';
import useFetch from 'fetch-suspense';

import styled from '@emotion/styled';

const Profile = () => {
  /**
   * TODO: Move content to a headless CMS
   */
  const { title, paragraphs } = useFetch('/data/profile.json');

  const [firstParagraph, secondParagraph, ...remainingParagraphs] = paragraphs;

  return (
    <Wrapper>
      <TopSection>
        <TopSectionLeft>
          <Title>{title}</Title>

          <Spacer />

          <Paragraph>{firstParagraph}</Paragraph>

          <Spacer />

          <Paragraph>{secondParagraph}</Paragraph>
        </TopSectionLeft>
        <TopSectionRight>
          {/* 
            TODO: Swap this with the image component and provide a URL to it 
          */}
          <BigGreyRectangle />
        </TopSectionRight>
      </TopSection>

      <BottomSection>
        {remainingParagraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TopSection = styled.div`
  display: grid;

  grid-template-columns: auto;

  /**
 * On small devices, i.e. < 650px width, we stack the header constituents
 */
  grid-template-areas:
    'left'
    'right';

  /**
 * On larger devices, i.e. > 650px with, adjacent position the page controls with the page content
 */
  @media only screen and (min-width: 650px) {
    grid-template-columns: 1fr 0.5fr;
    grid-template-areas: 'left right';
  }
`;
const TopSectionLeft = styled.div`
  grid-area: left;
`;
const TopSectionRight = styled.div`
  grid-area: right;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BottomSection = styled.div``;

const Title = styled.h1`
  font-size: clamp(1.5rem, 8vw - 2rem, 3rem);
`;

const Paragraph = styled.p`
  font-size: clamp(2rem, 8vw - 2rem, 2rem);
`;

const Spacer = styled.div`
  height: 24px;
`;

const BigGreyRectangle = styled.div`
  width: 147px;
  height: 147px;

  background-color: grey;
`;

export default Profile;
