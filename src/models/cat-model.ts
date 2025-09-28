export interface CatModel {
  id: number;
  name: string;
  characteristics: {
    weight: number,
    eyesColor: string,
  }
}