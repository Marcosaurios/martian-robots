# martian-robots

Code challenge. Let's do it!

`npm i` to install dependencies.

`npm run start` to build and run the simplest example (included in root directory as `input.txt`).

`npm run check --in=inpat.txt --out=outpat.txt` to provide a custom input and output files.

With Docker
--
Run `docker run -dp 8080:8080 marcosaurios/martian-robots:prod` to expose API over desired port.

On heroku is available through [https://marcosaurios-martian-robots.herokuapp.com/](https://marcosaurios-martian-robots.herokuapp.com/)

### API Endpoints

| Type        | Route           | Request  | Response  |
| ------------- |:-------------:| -----| -----|
| POST     | /explore | <pre>body: { file: input.txt }</pre> |  <pre>1 1 E<br>3 3 N LOST<br>2 3 S</pre>|

## **Technologies used (why/how)**

- **Typescript**: for type checking, ensuring every piece of code fits well each other. `npm run build` to create a build.
- **ESLint**: keeping a code style is good, cool and helps the team to follow a standard, avoiding unexpected bugs. Using `airbnb-base` here, run `npm run lint` to check style fixes, or `npm run lint:fix` to fix them.
- **Prettier**: code formatter using ESlint rules established before. On save (if you're running VSCode).
- **Commitlint**: a convention for commiting properly. Combined with Husky, pre-checks commits before pushing via hooks.
- **Jest**: testing framework. Using TDD with every small feature grants a healthy and well-paced progress of the project.
- **Express**: server framework. To provide service as a server, exposing routes over the internet to interact with the application.
- **Docker**: deploying container. For deploying the app in a closed environment, production ready.

## todo list

- [x] _add readme_
- [x] _init project_
- [x] _set testing env_
- [x] _add martian-robots logic_
- [x] _add prettier format command_
- [x] _add pre-commit hook format command_
- [x] _Dockerize project_
- [x] _Expose API endpoints to explore Mars_
- [x] _add Docs_
