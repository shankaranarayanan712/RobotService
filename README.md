
# Below are the application documentation for the Robot service
# Project Title
Robot Service
---
## Requirements to run using npm

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Clone Project
   1. You can clone this project using git clone https://github.com/shankaranarayanan712/RobotService
   2. Make sure, you checkout to master branch
      $ git checkout master

## Install
    $ cd YOUR_PATH/src
    $ npm install
## Running the project using npm

    $ npm start

## Running the project using Docker
Note: To use Docker, you would need Docker installed in your system. Hence Please install if it is not present already

 1. cd YOUR_PATH/src

 2. Run the build command to build the container
 $ docker build -t robot-service .

3. run the container which was build using the below command
 $ docker run -it -p 9000:8080 robot-service

The application will be running on http://localhost:9000 and the endpoints will be /api/robot
for example, if you need to get the robot location you can use http://localhost:9000/api/robot
Similarly for post method use Post as method type with http://localhost:9000/api/robot.
## Testing the project

    $ npm test

## Service Overview

1. This Robot service is a node (with Express) microservice that runs on port 8080

2. It is built with Service architecture wherein the Layers are segregated into Controller, Service  Layer and File system is  used for data persistance

3. Overall Two API's are exposed from this service one to move the robot and other to get robot's position
   get API's

4. The operateRobot (post: api/robot) moves the robot based on th input received
   (mandatory parameter: direction and step)

5. The get Robot position (get: api/robot) endpoint gets the latest position of the robot

6. Service validations are in place to validate the request
   for ex: if the body properties are not passed to Post method, it throws error and does not proceed with operation

7. The service is Containerized using Docker . Please refer to " ## Running the project using Docker" to build nd run

8. Usage: 
   a. If ou are running using npm , use these endpoint in Postman or any other APi testing tools
        1. To move robot
        Method:POST
        http://localhost:8080/api/robot 
        parameters: { "direction" : "Backward", "step": 12 }

        2. To get latest Location
        Method: GET
        http://localhost:8080/api/robot

    b.  If ou are running  using docker , use these endpoint in Postman or any other APi testing tools
        1. To move robot
        Method:POST
        http://localhost:9000/api/robot 
        parameters: { "direction" : "Backward", "step": 12 }

        2. To get latest Location
        Method: GET
        http://localhost:9000/api/robot

9. Test cases are written using Jest and supertest libraries

10. The Code is formatted using Prettier.
