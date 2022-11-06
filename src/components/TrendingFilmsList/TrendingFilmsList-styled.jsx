import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  list-style: none;
  color: black;
`;

export const LinkItem = styled(Link)`
  color: black;
  &:hover {
    color: red;
  }
`;
