# COMEM Web Services 2016 Project - Joël De Almeida et Tabata Hyppolite

Course: [https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-CM_WEBS-2016](https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-CM_WEBS-2016)

This project was developed during the course **Web Services** at the HEIG-VD in the COMEM+ Departement. The purpose was to make a REST Api with a few resources. This Api is an exemple of application for citizen engagement. It allow to a citizen to post issues he found in the city and the staff will be aware of these problems and will try to correct them. Given the time constraints, this project give an idea of how it could work and it based on the iflux blog, which give the specifications : http://www.iflux.io/blog.html.


## Installation

To run this project, you need to install a few things. If you're on Windows, we advise to install the terminal Babun.

### Node.js and NPM
To install Node js, follow the instructions here : https://nodejs.org/en/
We advise you to get the version 4.3.2

### MongoDB
To install the database MongoDb, download here https://www.mongodb.org/ and follow the instrcutions

## Modules
After you've installed Node.js and MongoDb, you need to install modules.

### Yeoman
```
npm install -g npm
npm install -g bower grunt-cli yo

```
###Express
```
npm install -g generator-express

```

## Run the project
### Run the database (MongoDb)
You need to do it in different terminals

First :
```
cd /c/
"C:/YourPath/MongoDB/Server/3.2/bin/mongod.exe"
```
Then :
```
cd /c/
"C:/YourPath/MongoDB/Server/3.2/bin/mongo.exe"

```

### Run the Node.js

```
cd "YourPathToTheProject"
grunt
```

Oder

```
cd "YourPathToTheProject"
npm start
```

## API Documentation
You can find the Api documentation in public/apidoc with all the routes

It will appear at launch of the project : http://localhost:3000 (for exemple)

## Routes

### Issue
```
GET/POST /issues
GET/PATCH/DELETE /issues/:id
GET /issues?longitude=value&latitude=value&distance=value
GET /issues/solved
POST/GET /issues/:id/actions
GET /issues/:id/actions
POST /issues/getIssuesBetweenDatesWithStatus
POST /issues/getIssuesUnsolvedBetweenDates
POST /issues/getIssuesBetweenDates
```

### User
```
GET/POST /users
GET/PATCH/DELETE /users/:id
GET /users/:id/issues
GET /users/mostIssuesCreatedByUser
GET /users/mostIssuesCreatedByAuthor
GET /users/mostIssuesSolvedByAuthor
GET /users/leastIssuesAssignedTo
```

### Tag
```
GET/POST /tags
GET/PATCH/DELETE /tags:id
```

### Type
```
GET/POST /types
GET/PATCH/DELETE /types/:id
GET /types/:id/issues
```

## Project available on Heroku
http://dry-everglades-13589.herokuapp.com
