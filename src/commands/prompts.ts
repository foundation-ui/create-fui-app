import inquirer from "inquirer";

export async function getProjectName(): Promise<string> {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your project name?",
      default: "my-app",
    },
  ]);

  return name;
}

export async function getProjectConfig() {
  const questions = [
    {
      type: "list",
      name: "template",
      message: "Which template would you like to use?",
      choices: [
        { name: "React App", value: "react" },
        { name: "Next.js App", value: "nextjs" },
        { name: "Next.js Docs", value: "nextjs-docs" },
      ],
    },
  ];

  return await inquirer.prompt(questions);
}
