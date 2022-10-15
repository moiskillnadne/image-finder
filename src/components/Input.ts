import styled, { css } from 'styled-components';
import { font } from '../constants/colors.constants';
import { BorderRound } from '../types/borderRound.type';

interface InputProps {
  round?: BorderRound;
}

export const Input = styled.input<InputProps>`
  outline: none;

  border: none;

  width: 80%;
  height: 26px;

  font-size: 16px;
  color: ${font};

  text-indent: 10px;
  caret-color: rgba(0, 0, 0, 0.5);

  transition: 0.2s;

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
