# Project Setup and Running Instructions

This document provides instructions for setting up and running the project.
Follow these steps to get started:

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can
  download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js comes with npm (Node Package Manager). You can check if npm
  is installed by running `npm -v` in your terminal.

## Setup Instructions

1. **Download amplify_outputs.json**

   Before proceeding with the setup, download the `amplify_outputs.json` file.
   This file is required for configuring the project properly. Place it in the
   root directory of your project.

2. **Copy Environment File**

   Set up your environment configuration by copying the example environment file
   to the root directory and renaming it to `.env`.

   ```bash
   cp env/example.env .env
   ```

3. **Install Dependencies**

   Next, install the project dependencies using npm. Run the following command:

   ```bash
   npm install
   ```

4. **Run the Project**

   In Development Mode

   To run the project in development mode, use:

   ```bash
    npm run dev
   ```

   After installing the dependencies, you can start the project using `npx`. Run
   the following command to initialize the project in sandbox mode:

   ```bash
   npx ampx sandbox
   ```

## Additional Information

- **Environment Variables**: The `.env` file should contain all the necessary
  environment variables for your project. Make sure to configure these variables
  as needed for your development or production environment.
- **Running Locally**: The `npx ampx sandbox` command is used to run the project
  locally in a sandbox environment. If you need to run the project in a
  different mode or configuration, refer to the project's documentation or
  configuration files.

## Troubleshooting

- If you encounter issues with `npm install`, ensure that your `package.json`
  file is correctly configured and that you have a stable internet connection.
- If the `npx ampx sandbox` command fails, verify that `npx` and `ampx` are
  properly installed and available in your PATH.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the
[deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws)
of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more
information.

## License

# Project Name

This repository does not currently have an open source license. The software
contained within is not licensed for use, modification, or distribution until
further notice.
