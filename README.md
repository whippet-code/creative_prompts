# creative_prompts

## Web app Photo Mooch - Creative prompts for photographers

Later progression - Artistic medium based usage (visual prompt, writing prompt, etc)
Build as stand alone app????? // how easy to convert to native???

// BUILD NOTES / TODOS

### Build

Fix / test save/comp routes / functions. ----- add / remove prompt completed in prompt document. (add / remove prompt from user document)
need to think about how to handle the user document, only need user id, saved and completed prompt array. Can i do it in the saveNfav comp? Passing user data as promps is making updating the array tricky? how do props affect state? (need to look into this)

Enable JWT auth / isAdmin / loggedin etc in the backend to protect routes from just typing in the url

** On load it appears as if user is logged in ?????? **

\***\* On first load have the home page show a pop up explaining how to use the app, and what it is. \*\***
**_Also need fallback for is server unavailable._**

## NOTES -

When adding prompts, the DB is updated but prompts array in state is not updated. Need to add a useEffect to update the prompts array in state when the DB is updated. this will need the promtp fetch moving to it's own func??

Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

Text color on "learn" prompts card, needs to be dark. (explore color variable.)

### POST SUBMIT TODOS

use dovenv for api keys and other sensitive data
Tidy components folder to user / admin folders??

```

```
