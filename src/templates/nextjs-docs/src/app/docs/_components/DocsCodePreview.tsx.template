"use client";

import React from "react";
import styled from "styled-components";

import { Button, ScrollArea } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePreviewProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
  scrollbar?: boolean;
}

const PreviewWrapper = styled(ScrollArea)`
  position: relative;
`;
const PreviewButton = styled(Button)`
  position: absolute !important;
  top: var(--measurement-medium-60);
  right: var(--measurement-medium-40);
`;
const CodePreviewBox = styled(ScrollArea)`
  max-height: var(--breakpoint-mobile);
`;

function DocsCodePreview({ code, language, scrollbar }: CodePreviewProps) {
  const [showCopy, setShowCopy] = React.useState<boolean>(false);
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    if (!code) return;

    await navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });

    clearTimeout(1000);
  };

  const customStyle = {
    padding: "var(--measurement-medium-60)",
    background: "var(--contrast-color)",
    borderRadius: "var(--measurement-medium-30)",
    minWidth: "fit-content !important",
  };

  return (
    <PreviewWrapper
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      {showCopy && (
        <PreviewButton variant="mono" sizing="small" onClick={copyToClipboard}>
          <Icon>{copied ? <PixelIcon.Check /> : <PixelIcon.Duplicate />}</Icon>
        </PreviewButton>
      )}
      <CodePreviewBox scrollbar={scrollbar}>
        <SyntaxHighlighter
          language={language ?? "tsx"}
          customStyle={customStyle}
          style={oneDark}
          lineNumberStyle={{
            paddingRight: "var(--measurement-medium-10)",
            textAlign: "right",
            userSelect: "none",
            opacity: 0.6,
          }}
          wrapLines={true}
          lineProps={{
            style: {
              backgroundColor: "transparent",
              display: "block",
              width: "100%",
            },
          }}
          PreTag="div"
        >
          {code}
        </SyntaxHighlighter>
      </CodePreviewBox>
    </PreviewWrapper>
  );
}

export default DocsCodePreview;
