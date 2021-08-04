# CamiloRScrumBoard
===
1. Create dir ```backend``` y ```frontend```.
2. Create ```.gitignore``` file  and add this lines.
```=
/backend/node_modules
/frontend/node_modules
```

3. Inside the backend folder initialize the project.
```
npm init
```
4. We install the following libraries (express, mongoose , cors, jsonwebtoken, bcrypt , moment, connect-multiparty, dotenv).
```
npm i express mongoose cors jsonwebtoken bcrypt moment connect-multiparty dotenv --save
```

5. We install the library for development (nodemon)
```
npm i nodemon --save-dev
```

6. Create the ```.env``` file inside backend and add this lines
```
PORT= #port
BD_CONNECTION=mongodb://localhost:27017/DataBase_Name
SECRET_KEY_JWT=AnyKey
```
8. We create the ```db``` folder and inside the ```db.js``` file
9. Create the ```index.js``` file.
10. in the ```package.json``` file we modify the following lines
```
"scripts": {
    "start": "nodemon index.js"
  },
```
11. Modify the ```db.js``` and ```index.js``` files to configure the connection to the mongo database
12. We run the application with ```npm start``` to verify that everything is in order.
