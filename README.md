# Compound Calculator

Welcome to the Compound Calculator project! This application is designed to help users calculate compound interest easily and efficiently. Below are the instructions to set up and run the project on your local machine.

## Prerequisites

Before you start, ensure you have the following installed:

- Git
- Node.js
- npm (Node Package Manager)

## Installing Node.js and npm

Node.js is a runtime environment that allows you to run JavaScript on the server side. npm is a package manager for JavaScript, and is used to install dependencies for the project.

### Windows and MacOS Users

1. Visit the [Node.js website](https://nodejs.org/).
2. Download the installer for your operating system (Windows or MacOS).
3. Run the installer and follow the prompts to install Node.js and npm.
4. After installation, open a terminal or command prompt and run `node -v` and `npm -v` to verify the installation.

### Linux Users

For Linux users, Node.js can be installed via package manager. Here's an example for Ubuntu/Debian systems:

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

Verify the installation by running `node -v` and `npm -v` in your terminal.

## Cloning the Repository and Running the App

1. **Clone the Repository**

Open your terminal or command prompt and run the following command:

```bash
git clone git@github.com:carlkaspar/compound-calc.git
```

2. **Navigate to the Project Directory**

Once the repository is cloned, navigate to the compound-calc directory:

```bash
cd compound-calc
```

3. **Install Dependencies**

Inside the project directory, install the necessary dependencies using npm:

```bash
npm install
```

4. **Run the Vue app**

After installing the dependencies, you can start the Vue application:

```bash
npm run dev
```

This will start the development server. Once it's running, you can view the application in your web browser by visiting http://localhost:5173/.

# Code tour

This application is build with Vue3 JS framework. The styles are applied by using tailwindcss utility classes. The form schema validation is implemented with zod. The validation is orchestrated by vee-validate. The line-chart for visualizing compound interest is drawn using chart.js.

1. Everything in Vue app starts from the `main.ts` file, which mounts the `App.vue`
2. `App.vue` is only responsible for rendering the `CompoundInterestCalculator` component
3. `CompoundInterestCalculator` component is responsible for some layout styles & rendering the `CompoundInterestForm` and `CompoundInterestChart` components. It also renders the simple total output for contributions & future value.
4. `CompoundInterestForm` is responsible for rendering all the inputs, adding some styles & updating the values of `useCompoundInterestForm` hook.
5. `useCompoundInterestForm.ts` is responsible for creating a context for the form using vee-validate library, setting the validation schema for the form which is declared in `compound-interest-form.model.ts` and submitting the form by calling the submit fn of `useCompoundInterestCalculator` hook
6. `useCompoundInterestCalculator.ts` is responsible for holding the state of the interest computation which is done by using the vue-use library createSharedComposable fn that effectively creates a singleton service accessible from any vue component / composable and orchestrating the computation itself.
7. `compound-formula.util.ts` actually describes the formulas used to calculate the compound & the contributions by time
8. `compound-interest-form.model.ts` describes the form validation schema by using the zod library
