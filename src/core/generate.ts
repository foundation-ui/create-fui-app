import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";

function processTemplate(content: string, config: any): string {
  // Replace template variables with actual values
  return content
    .replace(/\{\{PROJECT_NAME\}\}/g, config.projectName || "my-app")
    .replace(/\{\{TEMPLATE\}\}/g, config.template || "react");
}

async function copyTemplateFiles(
  templateDir: string,
  targetDir: string,
  config: any
) {
  const files = await fs.readdir(templateDir, { withFileTypes: true });

  for (const file of files) {
    const srcPath = path.join(templateDir, file.name);
    const destPath = path.join(targetDir, file.name.replace(".template", ""));

    if (file.isDirectory()) {
      await fs.ensureDir(destPath);
      await copyTemplateFiles(srcPath, destPath, config);
    } else {
      if (file.name.endsWith(".template")) {
        // Process template file
        let content = await fs.readFile(srcPath, "utf-8");
        content = processTemplate(content, config); // Pass config to processTemplate
        await fs.writeFile(destPath, content);
      } else {
        // Copy file as-is
        await fs.copy(srcPath, destPath);
      }
    }
  }
}

export async function generateProject({
  projectName,
  template,
  config,
}: {
  projectName: string;
  template: string;
  config: any;
}) {
  const spinner = ora("🔧 Creating project...").start();

  try {
    const targetDir = path.join(process.cwd(), projectName);
    const templateDir = path.join(__dirname, "../templates", template);

    // Check if template directory exists
    if (!(await fs.pathExists(templateDir))) {
      spinner.fail(chalk.red(`⚠️  Template "${template}" not found`));
      console.log(
        chalk.gray("Available templates might include: nextjs, react, express")
      );
      return;
    }

    // Check if directory exists
    if (await fs.pathExists(targetDir)) {
      spinner.fail(chalk.red(`⚠️  Directory ${projectName} already exists`));
      return;
    }

    // Create project directory and copy template files
    await fs.ensureDir(targetDir);
    await copyTemplateFiles(templateDir, targetDir, config);

    spinner.succeed(
      chalk.green(`🎉 Project ${projectName} created successfully!`)
    );

    console.log(chalk.blue("\n💡 Next steps:"));
    console.log(chalk.gray(`  cd ${projectName}`));
    console.log(chalk.gray("  pnpm run dev"));
  } catch (error) {
    spinner.fail(chalk.red("⚠️ Failed to create project"));
    console.error(error);
  }
}
