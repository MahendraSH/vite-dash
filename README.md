# Project Documentation

## Table of Contents

1. [Project setup using vite](#project-setup-using-vite)
2. [Package and there use cases](./Docs/packages.md/#package-and-there-use-cases)
3. [ MUI Custom Theme](./Docs/theme.md/#mui-custom-theme)

## Project Setup using Vite

### What is Vite?

- **Description**: Vite is a next-generation build tool that aims to provide a faster and more efficient development experience for modern web projects. It leverages modern browser capabilities such as ES module imports to eliminate the need for bundling during development, resulting in faster build times.

- **Documentation**: [Vite Documentation](https://vitejs.dev/)

### Setting up a Project with Vite

To set up a new project using Vite, follow these steps:

1. **Install Node.js**: Make sure you have Node.js installed on your system as Vite requires Node.js to run.

2. **Create a New Project**: Use npm or yarn to create a new project with Vite. Run the following command in your terminal:

   ```bash
   yarn create vite my-project
   ```

   Replace `my-project` with the name of your project.

3. **Select Project Template**: Vite will prompt you to choose a project template. You can choose from various options like Vue, React, or vanilla JavaScript. Select the template that best fits your project requirements.

4. **Navigate to Project Directory**: Once the project is created, navigate to the project directory:

   ```bash
   cd my-project
   ```

5. **Install Dependencies**: Install the project dependencies using npm or yarn:

   ```bash

   yarn
   ```

6. **Start the Development Server**: Start the Vite development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will launch a development server and open your project in the default web browser. You can now start developing your project using Vite!

### Custom Configuration

Vite allows you to customize various aspects of your project's build configuration. You can create a `vite.config.js` file in the root of your project to override default settings or add additional configurations.

Here's an example `vite.config.js` file:

```javascript
// vite.config.js
export default {
  // Custom configuration options here
};
```

For more information on customizing Vite configurations, refer to the [Vite Configuration Documentation](https://vitejs.dev/config/).
