import styled, { css } from "styled-components"
import { font, primary } from "../constants/colors.constants"

interface Margin {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

interface HeaderProps {
  colorized?: boolean
  margin?: Margin
}

export const HeaderL = styled.h1<HeaderProps>`
  color: ${font};
  margin: 0px;

  ${props =>
    props.colorized &&
    css`
      color: ${primary};
    `}

  ${props =>
    props.margin?.top &&
    css`
      margin-top: ${props.margin?.top}px;
    `}

  ${props =>
    props.margin?.bottom &&
    css`
      margin-bottom: ${props.margin?.bottom}px;
    `}

  ${props =>
    props.margin?.left &&
    css`
      margin-left: ${props.margin?.left}px;
    `}

  ${props =>
    props.margin?.right &&
    css`
      margin-right: ${props.margin?.right}px;
    `}
`
