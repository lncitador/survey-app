import express from "express";

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
