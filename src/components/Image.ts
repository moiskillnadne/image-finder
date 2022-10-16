import styled, { css } from 'styled-components';
import { SizeProp } from '../types/size.type';

interface ImageProps {
  customWidth?: SizeProp;
}

export const Thumbnail = styled.img<ImageProps>`
  ${props =>
    props.customWidth?.value &&
    props.customWidth?.metric &&
    css`
      width: ${props.customWidth.value}${props.customWidth.metric};
    `}
`;
