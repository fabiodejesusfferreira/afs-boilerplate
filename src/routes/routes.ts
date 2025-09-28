import { FastifyInstance } from "fastify";
import {
  getCat,
  getCatById,
  postCat,
  deleteCat,
  updateCat,
} from "../controllers/cats-controller";

export async function routes(app: FastifyInstance) {
  app.get("/cats", getCat);
  app.get("/cats/:id", getCatById);
  app.post("/cats", postCat);
  app.patch("/cats/:id", updateCat);
  app.delete("/cats/:id", deleteCat);
}