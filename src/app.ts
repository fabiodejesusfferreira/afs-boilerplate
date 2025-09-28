import fastify from "fastify";
import { routes } from "./routes/routes";
import cors from "@fastify/cors";

function createApp() {
  const app = fastify();

  app.register(cors);
  app.register(routes);

  return app;
}

export default createApp;