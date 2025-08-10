"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function DocsFooter({
  prev,
  next,
}: {
  prev?: string | null;
  next?: string | null;
}) {
  const router = useRouter();

  const prevOnly = prev && !next;
  const nextOnly = !prev && next;
  const both = prev && next;

  return (
    <section
      className={`p-y-large-10 flex align-center g-medium-60 ${both && "justify-between"} ${prevOnly && "justify-start"}  ${nextOnly && "justify-end"}`}
    >
      {prev && (
        <Button
          variant="border"
          sizing="large"
          onClick={() => router.push(prev)}
        >
          <Icon>
            <PixelIcon.ChevronLeft />
          </Icon>
          Previous
        </Button>
      )}
      {next && (
        <Button
          variant="border"
          sizing="large"
          onClick={() => router.push(next)}
        >
          Next
          <Icon>
            <PixelIcon.ChevronRight />
          </Icon>
        </Button>
      )}
    </section>
  );
}

export default DocsFooter;
