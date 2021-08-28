import React from 'react';
import styled, { css } from 'styled-components';

interface TypeStyle {
  size?: string;
  color?: string;
  weight?: string;
  margin?: string;
}

type TypeElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

export interface TypeProps extends TypeStyle {
  nowrap?: boolean;
  as?: TypeElements;
  children?: React.ReactNode;
}

const getCSS = (p: TypeProps) => {
  return css`
    font-size: ${p.size || '16px'};
    font-weight: ${p.weight || 'normal'};
    color: ${p.color || 'black'};
    margin: ${p.margin || 0};
    ${p.margin && 'display: inline-block;'}
    ${p.nowrap &&
    `
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
  `;
};

const H1 = styled.h1`
  ${getCSS}
`;
const H2 = styled.h2`
  ${getCSS}
`;
const H3 = styled.h3`
  ${getCSS}
`;
const H4 = styled.h4`
  ${getCSS}
`;
const H5 = styled.h5`
  ${getCSS}
`;
const H6 = styled.h6`
  ${getCSS}
`;
const P = styled.p`
  ${getCSS}
`;
const Span = styled.span`
  ${getCSS}
`;

export const Typography = ({ as: element, ...props }: TypeProps) => {
  const TypeComponent: any = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    span: Span,
  }[element || 'span'];
  return <TypeComponent {...props} />;
};
