const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthname: "John Doe",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 32,
    birthname: "Chance Doe",
    birthLocation: "Sri Lanka",
  },
  unknown: {
    age: 0,
    birthname: "Unknown",
    birthLocation: "Unknown",
  },
};

app.get("/", (request, response) => {
  // Server will know where to look to get the index
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    console.log("Responding from API.");
    response.json(rappers);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
