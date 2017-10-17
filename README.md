# RESTfulPalindromeAPIChallenge: 

Creating a RESTful API as my Qlik audition :sleepy: :cry: :fist: :tired_face: :ok_hand: :+1: :+1: :pray:


## Dev. Env. Prerequisites ##

You should already have Git or a git client installed.

Try [SmartGit](https://www.syntevo.com/smartgit/download) (for Windows/Linux/Mac).

1) Clone the repo from the current address in your browser bar.

![Clone](http://i.imgur.com/tdZHyKL.png)

**OR**

Clone the repo from the command line:

	git clone git@https://github.com/aklef/RESTfulPalindromeAPIChallenge.git

2) Install [Node.js](https://nodejs.org/en/) globally on your system. ([all-platform downloads](https://nodejs.org/en/download/), and [Windows instructions](http://blog.teamtreehouse.com/install-node-js-npm-windows)).

	If on Ubuntu 12.04 or higher, execute the following command ``sudo ln -s `which nodejs` /usr/bin/node`` (in a standard shell)
	This fixes a *nodejs vs node* linux-y issue (see [this post on StackOverflow](https://stackoverflow.com/questions/18130164/nodejs-vs-node-on-ubuntu-12-04) for details)

3.  From your console, be sure you can run `npm -v`. It should display the version number of npm.

4.  *From the repo dir*, run `npm install`. This sets up the app, grabbing *almost* all dependencies needed by the project and installing them to a local *node_modules* folder.

	You will also have to run `npm install -g nodemon` or, on Ubuntu, `sudo npm install -g nodemon`
	
	On Windows, install [Mongodb](https://docs.mongodb.com/manual/installation/) separately

6.  Once finished, make sure `npm ls` displays the full list of installed modules.

# App architecture #

The architecture of the app is quite straightforward:

A Mongodb server database instance runs on a node. The database URL is added to a mongoose instance connection, which feeds an express.js node server. Nodemon is simply a convenience package that watches for changed configuration files and automatically restarts the server.

![BlockDiagram](https://docs.google.com/drawings/d/e/2PACX-1vQTqnIUwvjAorqD4Jp9CcEcMO1th3wE3a9eAR76WN6NaPkOw_WtU9L0QkhYnzu-U2dDiBhskelrm2mY/pub?w=720&h=367)

Using the five different routes:

![Rest API](https://docs.google.com/drawings/d/e/2PACX-1vQRDC0kCO1Pl5MDmkYR4EdGz8mUamy9-4_PyGprsZtLhRJe75qxMB8HfqnNKqxlfYNazb23HtZAvDoF/pub?w=343&h=150)

and matching requests:

1. [GET] http://localhost:3000/messages
2. [POST] http://localhost:3000/messages
3. [GET] http://localhost:3000/messages/59e43e60ab99a0266cd51a58
4. [DEL] http://localhost:3000/messages/59e43e60ab99a0266cd51a58
5. [DEL] http://localhost:3000/messages

These methods of the REST API respectively allow users to:

- Post messages
- List received messages
- Retrieve specific messages on demand, and determine if it is a palindrome.
- Delete specific messages	
- Delete all messages


# App deployment #

The application servers runs at the command line level and serves local clients. 

To start Mongodb under windows, execute the following command from a shell at the application directory:

	npm run windb

Now to launch the server: simply do (on Linux this also start mongodb):

	npm start

and the API is now [reachable](http://localhost:3000) at 

	http://localhost:3000

# Postman Collection #

To test a REST API one can use an app called *Postman*.

This REST API has a Postman collection of test requests for it [available here](https://www.getpostman.com/collections/cae28f03ef022ab6ddcc)