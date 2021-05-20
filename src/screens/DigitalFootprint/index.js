import React from 'react';
import useFetch from 'fetch-suspense';

import styled from '@emotion/styled';

import { Frame } from '../../components';

const DigitalFootprint = () => {
  const sections = useFetch('/data/digitalFootprintSections.json');

  return (
    <Wrapper>
      {sections.map(({ title, paragraph, img, anchor }, index) => (
        <React.Fragment key={index}>
          <Section>
            <Frame ratio="31:6">
              {/* TODO: Implement a component that shows a loader prefetching the image */}
              <Image {...img} />
            </Frame>

            <SectionTitle>{title}</SectionTitle>
            <SectionParagraph>{paragraph}</SectionParagraph>

            <SectionLink {...anchor} />
          </Section>

          {/* Add a space between sections for all the sections apart for the last one */}
          {index < sections.length - 1 ? <SectionSpacer /> : null}
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Section = styled.div``;

const SectionTitle = styled.h1`
  font-size: 4rem;
`;

const SectionParagraph = styled.p`
  font-size: 2rem;
`;

const SectionLink = styled.a`
  font-size: 2rem;

  text-decoration: none;
`;

const SectionSpacer = styled.div`
  height: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export default DigitalFootprint;
