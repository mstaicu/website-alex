import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

export const HeaderNav = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <List>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy1">
            {t('header.nav.design')}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy2">
            {t('header.nav.illustration')}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy2">
            {t('header.nav.animation')}
          </StyledLink>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy1">
            {t('header.nav.others')}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy1">
            {t('header.nav.all')}
          </StyledLink>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy1">
            {t('header.nav.profile')}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink activeClassName="active" to="/dummy1">
            {t('header.nav.digitalFootprint')}
          </StyledLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: grid;

  height: 100%;

  grid-template-rows: auto;

  /**
   * On small devices, i.e. < 650px width, we create 3 equal columns
   */
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (min-width: 650px) {
    /**
     * On larger devices, i.e. > 650px with, we create 4 equal columns
     */
    grid-template-columns: repeat(4, 1fr);
  }
`;

const List = styled('ul')`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 0;
  margin: 0;

  list-style: none;
`;

const ListItem = styled('li')``;

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  // todo: define styles for the active state
  &.active {
    color: red;
  }
`;
