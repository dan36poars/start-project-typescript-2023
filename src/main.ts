import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ msg: "Hello World! 2022 Ready to Code" });
})

app.listen(3000);