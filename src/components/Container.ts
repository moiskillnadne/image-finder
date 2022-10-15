import styled, { css } from 'styled-components';

interface ContainerProps {
  flex?: boolean;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;

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
`;
