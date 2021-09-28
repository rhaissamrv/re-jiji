# evolveu-c6-project-02

Outline of the Superheros demo and the base for Re-jiji

# Please add any other dependencies and installs below with instruction 
"dependencies": 
*   "cookie-parser": "~1.4.4",
*   "debug": "~2.6.9",
*   "express": "~4.16.1",
*   "http-errors": "~1.6.3",
*   "mongoose": "^5.11.11",
*   "morgan": "~1.9.1"

  "devDependencies": {
*   "nodemon": "^2.0.7"

This project is a MERN (MongoDB, ExpressJS, ReactJS, Node.js) application made
of two processes:
   1. an Express "server" providing API support for retrieving and submitting
   data from the backend
   1. a React "client" providing a web-based UI

This project also leverages a cloud-based instance of MongoDB for storing
and retrieving data.

# Working with this Codebase

## Starting the Express server

In a command shell (CMD, PowerShell, Terminal, etc.) run the commands:
1. `cd server`
1. `npm install`
1. `npm run start`

## Starting the React client

In a command shell run the commands:
1. `cd client`
1. `npm install`
1. `npm run start`

Your browser should open to `http://localhost:4444`.

Here are the command-line steps taken to create the initial version of this project:
```bash
$ mkdir rejiji
$ cd rejiji
$ npx create-react-app --use-npm client
$ npx express-generator server
$ rm -rf client/.git client/.gitignore client/yarn.k
$ rm server/.gitignore
$ cat <<- EOF > .gitignore
# DIRECTORIES TO IGNORE
**/.pnp/
**/build/
**/coverage/
**/jspm_packages/
**/logs/
**/node_modules/
**/pids/
**/typings/
**/.npm/

# FILES TO IGNORE
*.log
*.pid
*.pid.lock
*.seed
*.tgz
.DS_Store
.env.*.local
.env.local
.eslintcache
.node_repl_history
.yarn-integrity
.next
EOF
it commit -m "initialize the project"
```

Now, we additionally enabled `nodemon` to reload the server code when it gets
edited.  To do that:
```bash
$ cd server
$ npm install --save-dev nodemon
$ perl -p -i -e 's/"start": "node /"start": "nodemon /' package.json
$ git add package.json 
$ git commit -m "adding nodemon to speed development"
$ cd ..
```