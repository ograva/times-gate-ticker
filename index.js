const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // You can change this port if needed.

// Replace 'gifs' with the actual name of your folder containing GIF files.
const gifFolderPath = path.join(__dirname, "docs/gifs");

// Serve static files from the 'gifs' folder.  This is the key line.
app.use("/gifs", express.static(gifFolderPath));

// Optional:  A simple route to show that the server is running.
app.get("/", (req, res) => {
    res.send("GIF Server is running!  Access GIFs at /gifs/");
});

// Start the server.
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Serving GIFs from folder: ${gifFolderPath}`);
});
