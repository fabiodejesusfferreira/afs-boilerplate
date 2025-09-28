import { database } from "../database/cats-database";
import { CatModel } from "../models/cat-model";
import { InfoCatModel } from "../models/info-cat-model";

export const findAll = async (): Promise<CatModel[]> => {
  return database;
};

export const findById = async (
  idRequest: number
): Promise<CatModel | undefined> => {
  return database.find((cat) => cat.id === idRequest);
};

export const insert = async (cat: CatModel) => {
  let getLastId = database[database.length - 1].id;
  cat.id = getLastId + 1;
  database.push(cat)
};

export const findAndModify = async (
  idRequest: number,
  catInfo: InfoCatModel
): Promise<CatModel> => {
  const catIndex = database.findIndex((cat) => cat.id === idRequest);
  if (catIndex !== -1) database[catIndex].characteristics = catInfo;

  return database[catIndex];
};

export const deleteById = async (idRequest: number) => {
  const catIndex = database.findIndex((cat) => cat.id === idRequest);
  if (catIndex !== -1) database.splice(catIndex, 1);
};
