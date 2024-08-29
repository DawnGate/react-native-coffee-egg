export type IOptionSelect = {
  id: string;
  text: string;
  cost: number;
  currency: string;
};

export type IOptionSelectOptional = {
  id: string;
  text: string;
  cost?: number;
  currency?: string;
};

export type ICategory = {
  id: string;
  name: string;
  imageSource: any;
  description?: string;
  bannerSource?: any;
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
    options: IOptionSelect[];
  };
  toppings?: {
    title: string;
    options: IOptionSelect[];
  };
};

export type IDefaultCustomizes = {
  size: IOptionSelect;
  toppings?: IOptionSelect[];
};

export type IItemDetail = {
  id: string;
  title: string;
  imageSource: any;
  description: string[];
  customizes: ICustomizes;
  defaultCustomizes: IDefaultCustomizes;
};
