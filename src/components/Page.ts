import styled, { css } from 'styled-components';

interface PageContainer {
  colorized?: string;
}

export const PageContainer = styled.div<PageContainer>`
  width: 100%;
  height: 100vh;

  ${props =>
    props.colorized &&
    css`
      background-color: ${props.colorized};
    `}
`;
