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

Press for prompt conditional????? (appearance wise, big if no prompt on screen then smaller for a reprompt)
Position of press for prompt and filter button, when prompt on screen.
Prompt cards need save / completed buttons

server routes???? what's needed

Plan / Build admin page
Plan / build user acc page
Plan / enable JWT auth / user log in
Nav bar
load/splash screen

// POST SUBMIT TODOS
use dovenv for api keys and other sensitive data

Tuesday 28th March
Edit Prompt component
admin dashboard - comp - Each prompt has edit & delete buttons
admin / user acc prompt cards - title, prompt, (conditional edit/delete buttons admin/user)
user dashboard - comp
user login - comp // set up submit
user register - comp //set up submit

NOTES - When adding prompts, the DB is updated but prompts array in state is not updated. Need to add a useEffect to update the prompts array in state when the DB is updated. this will need the promtp fetch moving to it's own func.
Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

PROMPT HOLDER -
HIDE press for prompt and filters when card on screen
ADD close button to card to hide card and bring back press for prompt and filters.
