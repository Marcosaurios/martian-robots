# martian-robots

Code challenge. Let's do it!

`npm i` to install dependencies.

`npm run start` to build and run the simplest example (included in root directory as `input.txt`).

`npm run check --in=inpat.txt --out=outpat.txt` to provide a custom input and output files.

## **Technologies used (why/how)**

- **Typescript**: for type checking, ensuring every piece of code fits well each other. `npm run build` to create a build.
- **ESLint**: keeping a code style is good, cool and helps the team to follow a standard, avoiding unexpected bugs. Using `airbnb-base` here, run `npm run lint` to check style fixes, or `npm run lint:fix` to fix them.
- **Prettier**: code formatter using ESlint rules established before. On save (if you're running VSCode).
- **Commitlint**: a convention for commiting properly. Combined with Husky, pre-checks commits before pushing via hooks.
- **Jest**: testing framework. Using TDD with every small feature grants a healthy and well-paced progress of the project.

## todo list

- [x] _add readme_
- [x] _init project_
- [x] _set testing env_
- [x] _add martian-robots logic_
- [x] _add prettier format command_
- [x] _add pre-commit hook format command_
- [ ] _add Docs_
