import { CatModel } from "../models/cat-model";

export const database: CatModel[] = [
  {
    id: 1,
    name: "Franjola",
    characteristics: {
      weight: 3,
      eyesColor: "marrom"
    }
  },
  {
    id: 2,
    name: "Tom",
    characteristics: {
      weight: 2,
      eyesColor: "castanho escuro"
    }
  },
  {
    id: 3,
    name: "Cesar",
    characteristics: {
      weight: 5,
      eyesColor: "laranja"
    }
  },
  {
    id: 4,
    name: "Zeus",
    characteristics: {
      weight: 5,
      eyesColor: "verde"
    }
  },
  {
    id: 5,
    name: "Floquinho",
    characteristics: {
      weight: 1,
      eyesColor: "azul"
    }
  },
];
