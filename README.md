# creative_prompts

## Web app Photo Mooch - Creative prompts for photographers

Later progression - Artistic medium based usage (visual prompt, writing prompt, etc)
Build as stand alone app????? // how easy to convert to native???

// BUILD NOTES / TODOS

### Build

\***\* On first load have the home page show a pop up explaining how to use the app, and what it is. \*\***
**_Also need fallback for is server unavailable._**

Add user id to completedBy array in prompt documents.

Don't show completeed prompts to logged in users.

Odd user handling when manually refreshing page as admin, treats as User not admin??

## NOTES -

When adding promnpt, push to so that it is the first item in the array, so that it is the first prompt shown to the user. in mongoDB.

Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

### POST SUBMIT TODOS

use dovenv for api keys and other sensitive data
Tidy components folder to user / admin folders??
