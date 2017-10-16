# RESTfulPalindromeAPIChallenge: 

Creating a RESTful API as my Qlik audition :sleepy: :cry: :fist: :tired_face: :ok_hand:


## Dev. Env. Prerequisites ##

You should already have Git or a git client installed.

Try [SmartGit](https://www.syntevo.com/smartgit/download) (for Windows/Linux/Mac).

1) Clone the repo from the current address in your browser bar.

![Clone](http://i.imgur.com/tdZHyKL.png)

**OR**

Clone the repo from the command line:

	git clone git@https://github.com/aklef/RESTfulPalindromeAPIChallenge.git

2) Install [Node.js](https://nodejs.org/en/) globally on your system. ([all-platform downloads](https://nodejs.org/en/download/), and [Windows instructions](http://blog.teamtreehouse.com/install-node-js-npm-windows)).

3.  From your console, be sure you can run `npm -v`. It should display the version number of npm.

4.  *From the repo dir*, run `npm install`. This sets up the app, grabbing all dependencies needed by the project and installing them to a local *node_modules* folder.

5.  Once finished, make sure `npm ls` displays the full list of installed modules.

3) Install [Mongodb](https://docs.mongodb.com/manual/installation/)

# App architecture #

The architecture of the app is quite straightforward:

A Mongodb server database instance runs on a node. The database url is added to a mongoose instance connection, which feeds an express.js node server. Nodemon is a convenience package that watches for changed files and automatically restarts the server.

![BlockDiagram](https://docs.google.com/drawings/d/e/2PACX-1vQTqnIUwvjAorqD4Jp9CcEcMO1th3wE3a9eAR76WN6NaPkOw_WtU9L0QkhYnzu-U2dDiBhskelrm2mY/pub?w=720&h=367)

Using the five different routes:

![Rest API](https://docs.google.com/drawings/d/e/2PACX-1vQRDC0kCO1Pl5MDmkYR4EdGz8mUamy9-4_PyGprsZtLhRJe75qxMB8HfqnNKqxlfYNazb23HtZAvDoF/pub?w=183&h=100)

and matching requests:

1. [GET] http://localhost:3000/messages
2. [POST] http://localhost:3000/messages
3. [GET] http://localhost:3000/messages/59e43e60ab99a0266cd51a58
4. [DEL] http://localhost:3000/messages/59e43e60ab99a0266cd51a58
5. [DEL] http://localhost:3000/messages


respectively, the REST API allows users to:

- Post messages
- List received messages
- Retrieve specific messages on demand, and determine if it is a palindrome.
- Delete specific messages	
- Delete all messages


# App deployment #

The application servers runs at the command line level and serves local clients. 

To start Mongodb, from a shell at the application directory, do:

	npm run windb

for windows computers, or for UNIX systems

	npm run mongo

To launch the server, simply:

	npm start

and the API is now [reachable](http://localhost:3000) at 

	http://localhost:3000

# Postman Collection #

To test a REST API one can use an app called *Postman*.

A Postman collection is available [here](https://www.getpostman.com/collections/cae28f03ef022ab6ddcc)