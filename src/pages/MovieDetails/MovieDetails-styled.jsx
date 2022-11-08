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
// export const Button = styled.button`
//   padding: 3px 3px;
//   border-radius: 15px;
//   background-color: transparent;
//   display: inline-block;
//   width: 28px;
//   height: 28px;
//   border: 0;
//   background-image: url('https://cdn-icons-png.flaticon.com/512/622/622669.png');
//   background-size: 60%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.5;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
//     scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;
//   &:hover {
//     opacity: 1;
//     scale: 1.2;
//     color: white;
//     background-color: orangered;
//   }
// `;

export const LinkToBack = styled(Link)`
  display: inline-block;
  color: black;
  padding: 5px 30px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  opacity: 0.6;
  background-color: orangered;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: black;
    scale: 0.8;
    opacity: 1;
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
