"use client";

import React from "react";
import Link from "next/link";

import styled from "styled-components";

const DocLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  font-size: var(--fontsize-medium-10);
  letter-spacing: calc(
    var(--fontsize-small-10) - ((var(--fontsize-small-10) * 1.066))
  );

  border-radius: var(--measurement-medium-10);
  transition: all ease-in-out 0.2s;
  opacity: var(--opacity-default-60);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    opacity: var(--opacity-default-100);
  }
`;

function DocsLink({
  to,
  children,
  ...restProps
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <DocLink href={to} {...restProps}>
      {children}
    </DocLink>
  );
}

export default DocsLink;
