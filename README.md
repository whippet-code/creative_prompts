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

### Thurs - Build

Press for prompt conditional????? (appearance wise, big if no prompt on screen then smaller for a reprompt)
Position of press for prompt and filter button, when prompt on screen.
Prompt cards need conditional save / completed buttons if user is loggedin

## NOTES -

When adding prompts, the DB is updated but prompts array in state is not updated. Need to add a useEffect to update the prompts array in state when the DB is updated. this will need the promtp fetch moving to it's own func.
Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

#### PROMPT HOLDER -

HIDE press for prompt and filters when card on screen
ADD close button to card to hide card and bring back press for prompt and filters.

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
