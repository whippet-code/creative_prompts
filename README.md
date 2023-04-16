# PhotoMooch

## Web app Photo Mooch - Creative prompts for photographers

Built in collaboration with @photomooch on instagram.
Using creativity and photography to aid mental wellbeing.
This app follows photomooch's aim to provide little creative prompts to spur users on to just get out and have fun playing with photography.
Users can get prompts without an account, however signed in users can save and mark prompts as complete.
Further to this workshop leaders have the option to set up accounts to allow them to add, edit and remove prompts from the database to suit their participants.

Live @ photomooch.onrender.com

### Build
// BUILD NOTES 

Created with a React.js frontend.
Express.js server using mongoose to link to a MongoDB as backend.
Deployed via render.


##### Current bug / fix list

*** On first load have the home page show a pop up explaining how to use the app, and what it is. ***
**_Also need fallback for if server unavailable._**

Add user id to completedBy array in prompt documents.

Don't show completed prompts to logged in users.

Odd user handling when manually refreshing page as admin, treats as User not admin?? Also after deleting prompt. (window.refresh?)

#### Future Feature / Add-ons

Later progression - Artistic medium based usage (visual prompt, writing prompt, etc)
Build as stand alone app????? // how easy to convert to native???
When adding prompt, push to so that it is the first item in the array, so that it's the first prompt shown to the user.
Also adding prompts tags is lazy/not implemented (just a string input), it needs to be an array of strings.
