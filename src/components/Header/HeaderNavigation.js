import React from 'react';

import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

export const HeaderNavigation = ({
  onCategoryClick,
  onDigitalFootprintClick,
  onProfileClick,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <List>
        <Button onClick={() => onCategoryClick('DESIGN')}>
          {t('header.nav.design')}
        </Button>
        <Button onClick={() => onCategoryClick('ILLUSTRATION')}>
          {t('header.nav.illustration')}
        </Button>
        <Button onClick={() => onCategoryClick('ANIMATION')}>
          {t('header.nav.animation')}
        </Button>
      </List>

      <List>
        <Button onClick={() => onCategoryClick('OTHER')}>
          {t('header.nav.others')}
        </Button>
        <Button onClick={() => onCategoryClick('')}>
          {t('header.nav.all')}
        </Button>
      </List>

      <List>
        <Button onClick={() => onProfileClick()}>
          {t('header.nav.profile')}
        </Button>
        <Button onClick={() => onDigitalFootprintClick()}>
          {t('header.nav.digitalFootprint')}
        </Button>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;

  height: 100%;

  grid-template-rows: auto;

  /**
   * On small devices, i.e. < 650px width, we create 3 equal columns
   */
  grid-template-columns: repeat(3, 1fr);

  margin-bottom: 2rem;

  @media only screen and (min-width: 650px) {
    /**
     * On larger devices, i.e. > 650px with, we create 4 equal columns
     */
    grid-template-columns: repeat(4, 1fr);

    margin: 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  padding: 4px;
  border: none;

  background: transparent;

  font-size: 14px;
  text-align: left;

  // todo: define styles for the active state
  &.active {
    color: red;
  }

  &:hover {
    cursor: pointer;
  }
`;
