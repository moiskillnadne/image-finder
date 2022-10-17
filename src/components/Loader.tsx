import styled, { css } from 'styled-components';
import { background, primary } from '../constants/colors.constants';
import { SizeProp } from '../types/size.type';
import { Container } from './Container';

interface LoaderElementProps {
  size: SizeProp;
}

export const LoaderElement = styled.div<LoaderElementProps>`
  border-radius: 50%;

  border-top: 16px solid ${primary};
  border-right: 16px solid ${background};
  border-bottom: 16px solid ${primary};
  border-left: 16px solid ${background};

  animation: spin 2s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${props =>
    props.size?.value &&
    props.size.metric &&
    css`
      width: ${props.size.value}${props.size.metric};
      height: ${props.size.value}${props.size.metric};
    `}
`;

interface LoaderProps {
  backgroundSize?: SizeProp;
  loaderSize: SizeProp;
  backgroundColor?: string;
}

export const Loader = ({ backgroundColor, backgroundSize, loaderSize }: LoaderProps) => {
  return (
    <Container
      flex
      verticalAlign="center"
      horizontalAlign="center"
      colorized={backgroundColor ?? ''}
      customHeight={backgroundSize}
      customWidth={backgroundSize}
      style={{ position: 'absolute' }}>
      <LoaderElement size={loaderSize} />
    </Container>
  );
};
