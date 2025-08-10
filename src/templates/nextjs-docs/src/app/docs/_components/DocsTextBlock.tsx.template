"use client";

import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  p,
  i,
  b,
  strong {
    color: var(--font-color-alpha-60);
    line-height: 1.3;
  }
`;

function DocsTextBlock({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
}

export default DocsTextBlock;
