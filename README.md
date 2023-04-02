# creative_prompts

## Web app Photo Mooch - Creative prompts for photographers

Later progression - Medium based usage (visual prompt, writing prompt, etc)
Build as stand alone app?????

// BUILD NOTES, TODOS

Enable JWT auth / isAdmin / loggedin etc in the backend

### Build

Prompt cards need conditional save / completed buttons if user is loggedin

save / completed buttons on prompt cards // conditional on loggedIn

routes not "protected".

LOG IN -> ERROR Message to user

## NOTES -

When adding prompts, the DB is updated but prompts array in state is not updated. Need to add a useEffect to update the prompts array in state when the DB is updated. this will need the promtp fetch moving to it's own func??

Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

### POST SUBMIT TODOS

use dovenv for api keys and other sensitive data
Tidy components folder to user / admin folders??
