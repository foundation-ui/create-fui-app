#!/usr/bin/env node

import { Command } from "commander";

import { generateProject } from "./core/generate";
import { getProjectName, getProjectConfig } from "./commands/prompts";

const program = new Command();

program
  .name("@usefui/create-fui-app")
  .description(
    "Open Source Command Line Interfaces to start app using foundation-ui technologies"
  )
  .version("1.0.0")
  .argument("[project-name]", "name of the project")
  .option("-t, --template <template>", "template to use")
  .action(async (projectName, options) => {
    await createProject(projectName, options);
  });

async function createProject(projectName: string, options: any) {
  // Get project name - only prompt if not provided
  if (!projectName) projectName = await getProjectName();

  // Get config - only prompt if template not provided via options
  let config: any = {};

  // No template provided, use interactive mode
  if (!options.template) {
    config = await getProjectConfig();
  } else {
    config = {
      template: options.template,
    };
  }

  await generateProject({
    projectName,
    template: options.template ?? config.template,
    config: {
      ...config,
      projectName,
    },
  });
}

program.parse();
