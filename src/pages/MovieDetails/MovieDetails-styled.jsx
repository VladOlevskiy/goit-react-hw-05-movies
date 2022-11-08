import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const AdditionalLinkItem = styled(NavLink)`
  color: black;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &:hover,
  &:focus {
    color: orangered;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const LinkToBack = styled(Link)`
  color: black;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &:hover,
  &:focus {
    color: orangered;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const AdditionalList = styled.ul`
  margin-bottom: 20px;
`;

export const AdditionalListItem = styled.li`
  margin-bottom: 15px;
  list-style: none;
`;

export const AdditionaText = styled.p`
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Img = styled.img`
  margin-right: 30px;
`;

export const MaineTitle = styled.h2`
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
`;

export const GenresListItem = styled.li`
  &: not(: last-child) {
    margin-right: 7px;
  }
`;

export const Section = styled.section`
  padding-top: 20px;
  padding-right: 16px;
  padding-left: 16px;
`;
