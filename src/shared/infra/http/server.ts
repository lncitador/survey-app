import express from "express";

import database from "@shared/infra/typeorm";

database();
const server = express();

server.get("/", (request, response) => {
  response.json({ message: "OK" });
});

const appServer = (host: number): void => {
  server.listen(host, () => {
    console.log("server running 🚀");
  });
};

export { appServer };
