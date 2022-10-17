import styled, { css } from "styled-components"
import { BorderRound } from "../types/borderRound.type"
import { FlexAlign, FlexDirection } from "../types/flex.type"
import { Padding } from "../types/padding.types"
import { SizeProp } from "../types/size.type"

interface ContainerProps {
  flex?: boolean
  flexPart?: number
  flexDirection?: FlexDirection
  flexWrap?: boolean
  gap?: number
  verticalAlign?: FlexAlign
  horizontalAlign?: FlexAlign
  customHeight?: SizeProp
  customWidth?: SizeProp
  colorized?: string
  padding?: Padding
  round?: BorderRound
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.customWidth?.value &&
    props.customWidth?.metric &&
    css`
      width: ${props.customWidth?.value}${props.customWidth?.metric};
    `}

  ${props =>
    props.flexPart &&
    css`
      flex: ${props.flexPart};
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

  
    @media(max-width: 560px) {
    ${props =>
      props.padding?.bottom &&
      css`
        padding-bottom: ${props.padding.bottom / 2}px;
      `}

    ${props =>
      props.padding?.top &&
      css`
        padding-top: ${props.padding.top / 2}px;
      `}
    
      ${props =>
      props.padding?.left &&
      css`
        padding-left: ${props.padding.left / 2}px;
      `}
    
    
      ${props =>
      props.padding?.right &&
      css`
        padding-right: ${props.padding.right / 2}px;
      `}
  }
`
