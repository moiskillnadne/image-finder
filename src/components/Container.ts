import styled, { css } from 'styled-components';
import { FlexAlign, FlexDirection } from '../types/flex.type';
import { Padding } from '../types/padding.types';
import { SizeProp } from '../types/size.type';

interface ContainerProps {
  flex?: boolean;
  flexDirection?: FlexDirection;
  flexWrap?: boolean;
  gap?: number;
  verticalAlign?: FlexAlign;
  horizontalAlign?: FlexAlign;
  customHeight?: SizeProp;
  customWidth?: SizeProp;
  colorized?: string;
  padding?: Padding;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.customWidth?.value &&
    props.customWidth?.metric &&
    css`
      width: ${props.customWidth?.value}${props.customWidth?.metric};
    `}

  ${props =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `}

  ${props =>
    props.flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.verticalAlign &&
    css`
      align-items: ${props.verticalAlign};
    `}

  ${props =>
    props.horizontalAlign &&
    css`
      justify-content: ${props.horizontalAlign};
    `}


  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}

  ${props =>
    props.flexWrap &&
    css`
      flex-flow: wrap;
    `}

  ${props =>
    props.customHeight?.value &&
    props.customHeight?.metric &&
    css`
      height: ${props.customHeight?.value}${props.customHeight?.metric};
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
