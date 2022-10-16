import styled, { css } from 'styled-components';
import { BorderRound } from '../types/borderRound.type';
import { SizeProp } from '../types/size.type';

interface ImageProps {
  customWidth?: SizeProp;
  customHeight?: SizeProp;
  round?: BorderRound;
}

export const Thumbnail = styled.img<ImageProps>`
  object-position: center;
  object-fit: cover;

  ${props =>
    props.customWidth?.value &&
    props.customWidth?.metric &&
    css`
      width: ${props.customWidth.value}${props.customWidth.metric};
    `}

  ${props =>
    props.customHeight?.value &&
    props.customHeight?.metric &&
    css`
      height: ${props.customHeight.value}${props.customHeight.metric};
    `}

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
