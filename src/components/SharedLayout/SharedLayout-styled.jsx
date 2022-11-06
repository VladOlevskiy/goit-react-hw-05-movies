import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 480px;
  margin: 0 auto;
  padding: 10px 16px;
  box-shadow: rgb(255 255 255) 0px 1px 7px, rgb(201 201 201 / 67%) 0px 1px 8px,
    rgb(0 0 0 / 55%) 0px 2px 3px;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;
