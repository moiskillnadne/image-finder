import { font } from './../constants/colors.constants';
import styled, { css } from 'styled-components';
import { BorderRound } from '../types/borderRound.type';

interface ButtonProps {
  round?: BorderRound;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;

  padding: 6px 10px;

  color: ${font};
  background-color: rgba(4, 4, 4, 0.1);

  transition: 0.2s;

  &:hover {
    background-color: rgba(4, 4, 4, 0.2);
  }

  ${props =>
    props.round?.upperLeft &&
    css`
      border-top-left-radius: ${props.round?.upperLeft}px;
    `}

  ${props =>
    props.round?.upperRight &&
    css`
      border-top-right-radius: ${props.round?.upperRight}px;
    `}
  
  ${props =>
    props.round?.lowerLeft &&
    css`
      border-bottom-left-radius: ${props.round?.lowerLeft}px;
    `}
  
  ${props =>
    props.round?.lowerRight &&
    css`
      border-bottom-right-radius: ${props.round?.lowerRight}px;
    `}
`;
