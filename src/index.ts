#!/usr/bin/env node

import { Command } from "commander";

import { generateProject } from "./core/generate";
import { getProjectName, getProjectConfig } from "./commands/prompts";

const program = new Command();

program
  .name("@usefui/bootstrap")
  .description(
    "Open Source Command Line Interfaces to start app using foundation-ui technologies"
  )
  .version("1.0.0")
  .argument("[project-name]", "name of the project")
  .action(async (projectName, _options) => {
    await createProject(projectName);
  });

async function createProject(projectName: string) {
  const name = await getProjectName();
  if (!projectName) projectName = name;

  const config = await getProjectConfig();
  await generateProject(projectName, config.template, config);
}

program.parse();
