import { FastifyRequest, FastifyReply } from "fastify";
import * as services from "../services/cats-services";
import { badRequest } from "../utils/http-helper";
import { CatModel } from "../models/cat-model";
import { InfoCatModel } from "../models/info-cat-model";

export const getCat = async (req: FastifyRequest, reply: FastifyReply) => {
  const httpResponse = await services.getCatService();
  reply.status(httpResponse.statusCode).send(httpResponse.body);
};

export const getCatById = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id: number = parseInt(req.params.id);
  const httpResponse = await services.getCatByIdService(id);
  reply.status(httpResponse.statusCode).send(httpResponse.body);
};

export const postCat = async (
  req: FastifyRequest<{ Body: CatModel }>,
  reply: FastifyReply
) => {
  const bodyValue = req.body;
  const httpResponse = await services.postCatService(bodyValue);

  if (!httpResponse) {
    const response = await badRequest();
    return reply.status(response.statusCode).send(response.body);
  }

  reply.status(httpResponse?.statusCode).send(httpResponse?.body);
};

export const updateCat = async (
  req: FastifyRequest<{ Params: { id: string }; Body: InfoCatModel }>,
  reply: FastifyReply
) => {
  const id: number = parseInt(req.params.id);
  const bodyValue: InfoCatModel = req.body;
  const httpResponse = await services.updateCatService(id, bodyValue);

  if (!httpResponse) {
    const response = await badRequest();
    return reply.status(response.statusCode).send(response.body);
  }

  reply.status(httpResponse.statusCode).send(httpResponse.body);
};

export const deleteCat = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id: number = parseInt(req.params.id);
  const httpResponse = await services.deleteCatService(id);

  if (!httpResponse) {
    const response = await badRequest();
    return reply.status(response.statusCode).send(response.body);
  }

  reply.status(httpResponse?.statusCode).send(httpResponse?.body);
};