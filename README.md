# creative_prompts

## Web app Photo Mooch - Creative prompts for photographers

Build plan
Gather resources - Prompts & images
Plan visuals - Mobile first design
Plan logic / handling of data (where keep files/resources)

Build prototype (single prompt card)

Later progression - Medium based usage (visual prompt, writing prompt, etc)
Build as stand alone app?????

// BUILD NOTES, TODOS

Enable JWT auth / isAdmin / loggedin etc in the backend
Nav bar
load/splash screen

### POST SUBMIT TODOS

use dovenv for api keys and other sensitive data
Tidy components folder to user / admin folders??

### Fri - Build

Prompt cards need conditional save / completed buttons if user is loggedin
test login / register
implement react router
modals styling and keep open on click off modal
save / completed buttons on prompt cards // conditional on loggedIn
nav conditional - login -> log out && register -> Dash

## NOTES -

When adding prompts, the DB is updated but prompts array in state is not updated. Need to add a useEffect to update the prompts array in state when the DB is updated. this will need the promtp fetch moving to it's own func??
Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

After login / register, the user is redirected to the home page. Need to redirect to the user dashboard.

#### Router

Home // Splash screen ----> PromptHolder not logged in
->
Login / Register
->
PromptHolder
->
User dashboard || Admin dashboard

#### Nav bar

logo ---> home
login / logout ---> login / logout
register ---> register

user acc || admin ---> user dashboard || admin dashboard

not logged in -- logo, login, register
logged in -- logo, logout, user acc || admin
