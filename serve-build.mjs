import express from "express";

const app = express();
const port = 4200;

app.use(express.static("dist/client-app/browser"));
app.listen(port, () => console.log(`Serving app on port ${port}...`));
