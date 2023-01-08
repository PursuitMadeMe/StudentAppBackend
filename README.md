# StudentAppBackend
Go into Terminal - Desktop - Project Review folder : mkdir student-app-backend (Make a new directory called student-app-backend)

Go into that new directory : cd student-app-backend
- Student-app-backend : npm init (initialize - package.json) 
- ENTER 7 times 
- Author : Kenyetta Griffin 
- ENTER 2 times 
- Open student-app-backend in VS code : code . 


VS Code opens with {package json}
- Create a new file called app.js
- npm install express (dependancies : for backend server & node modules)
- Create a new file called server.js
- Go into package.json and change : “main” : “app.js”,
- Go into package.json and add to “scripts” : “start” : “node server.js”


In the Terminal run - npm start : Listening on 3003 (GOOD)
Go to URL and check - localhost:3003 : Hello World! (GOOD) 
 
- Create a new file called .gitignore (so Github is not tracking)

In the Terminal run - git init (files turn green)
In the Terminal run - git status (files listed in red :node modules excluded)
In the Terminal run - git add . 
In the Terminal run - git status (list of files in green that will be added)
In the Terminal run - git commit -m “initial commit for student app backend”
In the Terminal run - git push *

- Create a new folder called controller
- Inside the controller folder make a file called studentsController.js
* Without nodemon you have to npm start every time you make a new route 

In the Terminal run - npm install -D nodemon : enabled nodemon server.js
(in package.json “devDependancies”)

In package.json add to “scripts” : “dev” : “nodemon server.js”, 

In the Terminal run - npm run dev (continuously updates changes)

- Create a new file inside StudentAppBackend called studentData.json
- Paste students object of data 
- Create .env file 

In the Terminal run - nom install dotenv


