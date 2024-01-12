# Next.js Environment Validation Package

This package provides a set of scripts for environment variable validation in Next.js applications. It ensures that your environment variables are set up correctly and adhere to a specified schema.

TODO: Yet to publish the package to npm registry!!

## Installation

To install the package, run:

```bash
npm install env-validation
```

This will automatically set up the required files and scripts in your project.

## Usage

### Setup

Run the following command to create the initial files:

```bash
npm run prestart
```

This command will execute the setup script, generate the initial environment schema, and update the `.env.example` file.

### Modify Environment Schema

Edit the `envSchema.js` file in the root directory to match your application's specific environment requirements.

### Update .env.example

To update the `.env.example` file based on the modified schema, run:

```bash
npm run updateEnvExample
```

### Start Next.js Application

To start your Next.js application with environment variable validation, run:

```bash
npm start
```

This command will validate your environment variables against the schema defined in `envSchema.js` before starting the Next.js application.

### Project Structure

- env-validation/

  - src/
    - validateEnvironment.js
  - scripts/
    - setup.js
    - updateEnvExample.js
    - generateEnvSchema.js
  - .gitignore
  - .npmignore
  - package.json
  - README.md
  - .env.example
  - envSchema.js

### Files and Scripts

- `validateEnvironment.js`: Script for environment variable validation.
- `setup.js`: Script to create the initial .env.example file.
- `updateEnvExample.js`: Script to update the .env.example file based on the modified schema.
- `generateEnvSchema.js`: Script to generate the initial envSchema.js file with dummy values.
- `.env.example`: Example file with placeholder values for environment variables.
- `envSchema.js`: File containing the schema for environment variables.

### Customization

Modify the `envSchema.js` file to match your application's specific environment requirements.
