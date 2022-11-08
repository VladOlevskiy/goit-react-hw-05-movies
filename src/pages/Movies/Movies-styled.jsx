import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 30px;
  padding-right: 16px;
  padding-left: 16px;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  list-style: none;
  color: black;
`;

export const LinkItem = styled(Link)`
  padding: 5px 5px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 500;
  background-color: orangered;
  color: black;
  &:hover {
    color: white;
  }
`;
