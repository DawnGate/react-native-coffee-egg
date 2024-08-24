export type IOptionSelect = {
  id: string;
  text: string;
  cost?: number;
  currency?: string;
};

export const defaultSizes = [
  {
    id: "L",
    text: "L",
    cost: 20000,
    currency: "đ",
  },
  {
    id: "S",
    text: "S",
    cost: 10000,
    currency: "đ",
  },
  {
    id: "H",
    text: "Hot",
    cost: 20000,
    currency: "đ",
  },
];

export const defaultIces = [
  {
    id: "N",
    text: "Normal",
  },
  {
    id: "L",
    text: "Little",
  },
  {
    id: "S",
    text: "Separate",
  },
  {
    id: "No",
    text: "Not include",
  },
];
