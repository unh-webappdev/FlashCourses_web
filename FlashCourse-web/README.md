# FlashCourseWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Running the Angular 2/5 Locally
Install NodeJS (> v4) and NPM (> v3) from https://nodejs.org/en/download/, you can check the versions you have installed by running node -v and npm -v from the command line.
Download the project source code from GitHub repository: https://github.com/unh-webappdev/FlashCourses_web.git
Install all required npm packages by running ’npm install’ from the command line in the project root folder (where the package.json is located).
Start the application by running ’npm start’ from the command line in the project root folder.

## Creating a Build / Deploying your App
We need to use the Angular CLI to create a build of our app. Hop into the console within the project folder and run the following command:
ng build --prod (to make sure that you are only doing production)
This will take 5-20 seconds to run. The end result is a new folder called /dist within the project root folder. -- prod will reduce nearly a 90% in file size. This is because the --prod flag enables a number of optimizations that drastically reduces the size of the project.
If you do ng build, it will create up to 3mb file size.
 
 
## Run a Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/`  directory. Use the `-prod` flag for a production build.
