# create-fui-app CLI

Open Source Command Line Interface to bootstrap Foundation UI applications with pre-configured templates.

## Quick Start

```bash
# Create a new React app
pnpx @usefui/create-fui-app my-app --template react

# Create a new Next.js app
pnpx @usefui/create-fui-app my-app --template nextjs

# Create a new Next.js docs site
pnpx @usefui/create-fui-app my-app --template nextjs-docs

# Interactive mode (choose template)
pnpx @usefui/create-fui-app my-app
```

## Examples

This example shows basic usage of the create-fui-app CLI.

## Setup

1. Run the CLI with your desired template
2. Navigate to your project directory
3. Install dependencies and start development

## Usage

```bash
# Create and start a React app
pnpx @usefui/create-fui-app my-react-app --template react
cd my-react-app
pnpm install && pnpm dev

# Create and start a Next.js app
pnpx @usefui/create-fui-app my-nextjs-app --template nextjs
cd my-nextjs-app
pnpm install && pnpm dev

# Create and start a Next.js docs site
pnpx @usefui/create-fui-app my-docs --template nextjs-docs
cd my-docs
pnpm install && pnpm dev
```

## Technologies

### React Template

- Frontend: React 19, Vite 7
- Routing: React Router 7
- State Management: Zustand, TanStack Query
- Forms: React Hook Form, Zod
- Styling: Styled Components, Foundation UI
- Development: TypeScript, ESLint, Vitest

### Next.js Template

- Framework: Next.js 15 with Turbo
- Frontend: React 19
- State Management: Zustand, TanStack Query
- Forms: React Hook Form, Zod
- Styling: Styled Components, Foundation UI
- Environment: T3 Env, PostHog Analytics
- Development: TypeScript, ESLint, Prettier

### Next.js Docs Template

- Framework: Next.js 15 with Turbo
- Frontend: React 19
- Documentation: MDX, Gray Matter, Next MDX Remote
- Code Highlighting: CodeMirror, React Syntax Highlighter
- State Management: Zustand, TanStack Query
- Forms: React Hook Form, Zod
- Styling: Styled Components, Foundation UI
- Development: TypeScript, ESLint, Prettier

## License

MIT © Foundation UI
