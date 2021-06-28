import "reflect-metadata";

import { config } from "dotenv";

import { appServer } from "./src/shared/infra/http/server";

config();

appServer(Number(process.env.SERVER_HOST));
