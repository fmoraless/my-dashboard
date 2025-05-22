This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Necessary Installations

### Node.js

- Node.js version 18 or higher is required.
- To install or manage Node.js versions, it's recommended to use nvm (Node Version Manager).
  - Install nvm:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    *(Note: You might need to restart your terminal or source your shell configuration file (e.g., `.bashrc`, `.zshrc`) for the `nvm` command to be available.)*
  - Install Node.js version 18 (or the latest LTS):
    ```bash
    nvm install 18 
    ```
    or to install the latest LTS (Long Term Support) version:
    ```bash
    nvm install --lts
    ```
  - To use a specific version (e.g., version 18):
    ```bash
    nvm use 18
    ```
- To verify your Node.js version:
  ```bash
  node -v
  ```

### Other Project Dependencies

This project uses several other libraries and tools, which are listed in the `package.json` file. These include:

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **React & React DOM**: Libraries for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- Other libraries specified in `dependencies` and `devDependencies` in `package.json`.

These dependencies are managed by your Node package manager (npm or Yarn).

### Installing Dependencies

To install all project dependencies listed in `package.json`, navigate to the project's root directory in your terminal and run:

```bash
npm install
```

If you prefer using Yarn and have it installed, you can also use:

```bash
yarn install
```
*(Ensure you have a `yarn.lock` file if you primarily use Yarn, though one isn't present in this project currently.)*
