export type IOptionSelect = {
  id: string;
  text: string;
  cost?: number;
  currency?: string;
};

export type ICategory = {
  id: string;
  name: string;
  imageSource: any;
};

export type IMenuItem = {
  id: string;
  name: string;
  imageSource: any;
  cost: number;
  currency: string;
};

export type ICustomizes = {
  size: {
    title: string;
    options: Required<IOptionSelect>[];
  };
  toppings?: {
    title: string;
    options: IOptionSelect[];
  };
};

export type IDefaultCustomizes = {
  size: string;
  toppings?: string[];
};

export type IItemDetail = {
  id: string;
  title: string;
  imageSource: string;
  description: string[];
  customizes: ICustomizes;
  defaultCustomizes: IDefaultCustomizes;
};
