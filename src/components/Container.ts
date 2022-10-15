import styled, { css } from 'styled-components';
import { Padding } from '../types/padding.types';

interface ContainerProps {
  fullWidth?: boolean;
  flex?: boolean;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
  horizintalSpaceBetween?: boolean;
  height?: number;
  colorized?: string;
  padding?: Padding;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.verticalCenter &&
    css`
      align-items: center;
    `}

  ${props =>
    props.horizontalCenter &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.horizintalSpaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}

  ${props =>
    props.colorized &&
    css`
      background-color: ${props.colorized};
    `}

  ${props =>
    props.padding?.bottom &&
    css`
      padding-bottom: ${props.padding.bottom}px;
    `}

  ${props =>
    props.padding?.top &&
    css`
      padding-top: ${props.padding.top}px;
    `}

  ${props =>
    props.padding?.left &&
    css`
      padding-left: ${props.padding.left}px;
    `}


  ${props =>
    props.padding?.right &&
    css`
      padding-right: ${props.padding.right}px;
    `}
`;
