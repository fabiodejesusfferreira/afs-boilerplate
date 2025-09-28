import { CatModel } from "../models/cat-model";
import { InfoCatModel } from "../models/info-cat-model";
import * as CatRepository from "../repositories/cats-repository"
import * as httpResponse from "../utils/http-helper"

export const getCatService = async () => {
  const data = await CatRepository.findAll();
  let response = null;

  data
    ? (response = await httpResponse.OK(data))
    : (response = await httpResponse.noContent());

  return response;
};

export const getCatByIdService = async (id: number) => {
  const data = await CatRepository.findById(id);
  let response = null;

  data
    ? (response = await httpResponse.OK(data))
    : (response = await httpResponse.noContent());

  return response;
};
export const postCatService = async (cat: CatModel) => {
  let response = null;
  if (!cat) response = httpResponse.badRequest();
  else {
    await CatRepository.insert(cat);
    response = httpResponse.created();
  }

  return response;
};

export const updateCatService = async (
  id: number,
  catInfo: InfoCatModel
) => {
  let response = null;
  if (!id) return (response = httpResponse.badRequest());
  else {
    const data = await CatRepository.findAndModify(id, catInfo);
    if (!Object.keys(data)) response = await httpResponse.badRequest();
    response = await httpResponse.OK(data);
  }

  return response;
};

export const deleteCatService = async (id: number) => {
  let response = null;
  if (!id) return (response = httpResponse.badRequest());
  else {
    await CatRepository.deleteById(id);
    response = httpResponse.OK({ message: "Successfully deleted" });
  }

  return response;
};