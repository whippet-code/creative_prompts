# Capstone Project - Web Development Bootcamp

## Photo Mooch - Creative Prompts

## Software Requirements Documentation

<p align="center">
  <img src="https://d1fdloi71mui9q.cloudfront.net/EnURNTC2TbygUnaBqDzl_Ar7B1A0BMyJ21bnD">
</p>

### Project Overview

Photo Mooch is a web app that provides creative prompts for artists & photographers. The app will be a single page app that will display a random prompt, associated image and extra info.
Registered users will be able to click a button to get a new prompt plus they will be able to set filters to control the type of prompt recieved. The user will also be able to save the prompt and mark the prompt as complete. The user will be able to view all of the completed and saved prompts personal to their account.
An admin level of user will be able to add new prompts to the database, along with editing and deleting existing prompts.

### System Architecture

The app will be a single page app with a front end built using React. The database will be hosted on MongoDB Atlas and interaction between the front and back end will be handled via express.js. The app will be built using the MERN stack. This will allow for a fast and responsive app that will be easy to maintain and update. Along with this the MERN stack is a popular and well supported stack that will allow for future enhancement and collaboration with other developers.
Upon build the app will be deployed to Heroku for users.
Syling will be handled using CSS and tailwind.css, this will allow for a responsive and easy to maintain design. Whilst also allowing for a clean and modern look to be created in minimal time. The app will have a mobile first design, this will allow for the app to be used on all devices. This will also allow for the app to be used on the go, allowing for the user to get a prompt at any time.
To manage the app and the database a MongoDB Atlas cluster will be used. This will allow for the app to be hosted on Heroku and the database to be hosted on MongoDB Atlas. The express.js server will be used to handle the interaction between the front and back end, along with using extra helper libraries such as JSONWebToken, bcrypt and mongoose, to handle the authentication, encryption and user management.
To aid the development process the app will be built using the agile methodology. Building section by section, will allow for the app to be built in a way that is easy to maintain and update. This will also allow for the app to be built in a way that is easy to add new features to in the future.

### User Stories

Jenny - A photographer who is looking for inspiration for her next shoot. She wants to be able to get a random prompt that will help her to create a new and interesting shoot. She also wants to be able to save the prompts that she likes so that she can come back to them later.

Harold - A retired amateur artist. Looking for ways to connect better with his local art group. He wants to be able to get a prompot that requires him to work with others to create a new piece of art.

Paul - A workshop leader who is looking for new ways to inspire his students. He wants to be able to edit prompts that will help him to create a new and interesting workshop that suits his students.

Dev - Enjoys creating new and interesting prompts for other artists and photographers. He wants to be able to add new prompts to the app so that he can share his ideas with others.

Nisha - Likes to do small challenges during her work day. She needs to be able to filter her prompts so that she can get one that can be completed during her lunch break.

Jamal - A photographer who is looking for a way to keep track of the prompts that he has completed. He wants to be able to mark prompts as complete and save prompts that he likes.

### System Requirements

#### Functional Requirements

- The app will be a single page app that will display a random prompt, associated image and extra info. (Free tier, unregistered user)
- Registered users will be able to click a button to get a new prompt plus they will be able to set filters to control the type of prompt recieved. The user will also be able to save the prompt and mark the prompt as complete. The user will be able to view all of the completed and saved prompts personal to their account.
- An admin level of user will be able to add new prompts to the database, along with editing and deleting existing prompts.

#### Non-Functional Requirements

##### Usability

- The app will be easy to use and navigate.
- The app will be responsive and work on all devices.
- The app will be easy to maintain and update.
- The app will be easy to add new features to in the future.

##### Reliability

- The app will be hosted on Heroku.
- The database will be hosted on MongoDB Atlas.
- The app will be built using the MERN stack.
- The app will be built using the agile methodology.

##### Performance

- The app will be fast and responsive.
- The app will be easy to maintain and update.
- The app will be easy to add new features to in the future.

##### Security

- The app will be secure.
- User passwords will be encrypted.
- User passwords will be stored in the database.
- JWT will be used to handle authentication.
- The app will be hosted on Heroku.

### Use Case Diagram

![Use Case Diagram](https://i.imgur.com/0Z7Z7Zg.png)
