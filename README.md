# creative_prompts

## Web app Photo Mooch - Creative prompts for photographers

Later progression - Artistic medium based usage (visual prompt, writing prompt, etc)
Build as stand alone app????? // how easy to convert to native???

// BUILD NOTES / TODOS

### Build

Enable JWT auth / isAdmin / loggedin etc in the backend to protect routes from just typing in the url

\***\* On first load have the home page show a pop up explaining how to use the app, and what it is. \*\***
**_Also need fallback for is server unavailable._**

Add user id to completedBy array in prompt documents.]

## NOTES -

When adding promnpt, push to so that it is the first item in the array, so that it is the first prompt shown to the user. in mongoDB.

Also adding prompts tags is lazy/not implemented (just a string input), it need to be an array of strings.

### POST SUBMIT TODOS

use dovenv for api keys and other sensitive data
Tidy components folder to user / admin folders??

### JWT route protection

previous code.

app.get("/admin_resource", (req, res) => {
const token = req.headers["authorization"].split(" ")[1];
try {
const decoded = jwt.verify(token, "jwt-secret");
if (decoded.admin) {
res.send({ msg: "Success! Admin access authorised." });
} else {
res
.status(403)
.send({ msg: "Your JWT was verified, but you are not an admin." });
}
} catch (err) {
res.sendStatus(401);
}
});
