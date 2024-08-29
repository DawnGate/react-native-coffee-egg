import {
  ICategory,
  IItemDetail,
  IMenuItem,
  IOptionSelect,
} from "@/types/order";

export const mockDrinkImg = require("../assets/images/demos/drink.png");
export const mockModalImg = require("../assets/images/demos/detailModal.jpg");

export const mockBannerSignature = require("../assets/images/banners/our-signature.png");
export const mockBannerRegular = require("../assets/images/banners/regular-coffee.jpg");
export const mockBannerFruit = require("../assets/images/banners/fresh-fruit.jpeg");

export const categoriesSignature = require("../assets/images/order/categories/signature.jpg");
export const categoriesRegular = require("../assets/images/order/categories/regular.jpg");
export const categoriesFruit = require("../assets/images/order/categories/fruit.jpg");
export const categoriesBeans = require("../assets/images/order/categories/beans.jpg");

export const signatureEggCoffee = require("../assets/images/order/signatures/egg-coffee.jpg");

export const regularMilkCoffee = require("../assets/images/order/regulars/milk-coffee.jpeg");

export const mockCategories: ICategory[] = [
  {
    id: "signature",
    name: "Our signature",
    imageSource: categoriesSignature,
    description: "Egg coffee, a traditional Hanoi drink",
    bannerSource: mockBannerSignature,
  },
  {
    id: "regular",
    name: "Regular Coffee",
    imageSource: categoriesRegular,
    description: "Vietnamese coffee, black OR milk?",
    bannerSource: mockBannerRegular,
  },
  {
    id: "fruit",
    name: "Fresh Fruit",
    imageSource: categoriesFruit,
    description: "Fruit in your cup, joice, yogurt, smoothie",
    bannerSource: mockBannerFruit,
  },
  {
    id: "tea",
    name: "Tea",
    imageSource: categoriesSignature,
    description: "Diversity of tea, fulfill you taste and mind",
  },
  {
    id: "food",
    name: "Food",
    imageSource: categoriesSignature,
    description: "We include some food for hunger people",
  },
  {
    id: "special-foods",
    name: "Special Foods",
    imageSource: categoriesSignature,
    description: "Vietnamese should try food",
  },
  {
    id: "beans",
    name: "Beans",
    imageSource: categoriesBeans,
    description: "Take home beans and bag of coffee",
  },
];

const signatureItems: IMenuItem[] = [
  {
    id: "egg-coffee",
    name: "Egg Coffee",
    imageSource: signatureEggCoffee,
    cost: 40000,
    currency: "đ",
  },
];

const regularItems: IMenuItem[] = [
  {
    id: "milk-coffee",
    name: "Milk Coffee",
    imageSource: regularMilkCoffee,
    cost: 40000,
    currency: "đ",
  },
];

export const mockMenuItems: {
  [key: string]: IMenuItem[];
} = {
  signature: signatureItems,
  regular: regularItems,
};

const sizeOptions: {
  [key: string]: Omit<Required<IOptionSelect>, "cost">;
} = {
  L: {
    id: "L",
    text: "L",
    currency: "đ",
  },
  S: {
    id: "S",
    text: "S",
    currency: "đ",
  },
  Hot: {
    id: "Hot",
    text: "Hot",
    currency: "đ",
  },
};

export const mockItemDetails: {
  [key: string]: IItemDetail;
} = {
  "egg-coffee": {
    id: "egg-coffee",
    title: "Egg Coffee / Ca phe Trung",
    imageSource: signatureEggCoffee,
    description: [
      "EGG coffee is a traditional drink in Ha Noi, a capital of Viet Nam. It was created in 1946 by a Vietnamese who worked for the French Restaurant as a barista. Especially before 1975, Vietnam was separated into 2 countries, namely North and South of Vietnam what was heart breaking Vietnamese nation.\n",
      "In Sai Gon, because of American army, milk was very easy to find. Alternatively, milk coffee became more popular there. In the contrary, the residents in Hanoi were very poor and condensed milk was too expensive for them to buy it at that time. As a result, the majority of them used egg instead of condensed milk.\n",
      "Egg coffee was made from yolk mixed sugar. A combination of yolk, sugar and black coffee, unintentional created a special taste, unique culture of people in Hanoi. And now it becomes well-known with all Vietnamese as well as foreigners.\n",
    ],
    customizes: {
      size: {
        title: "Chose size",
        options: [{ ...sizeOptions["L"], cost: 40000 }],
      },
    },
    defaultCustomizes: {
      size: { ...sizeOptions["L"], cost: 40000 },
    },
  },
  "milk-coffee": {
    id: "milk-coffee",
    title: "Milk Coffee / Ca phe Sua Viet Nam",
    imageSource: regularMilkCoffee,
    description: [
      "Vietnamese iced coffee is a traditional Vietnamese coffee recipe. It is created using coffee roasted between medium and dark. The drink is made by passing hot water through the grounds into a cup that already contains condensed milk. To serve the drink cold, ice is added to the cup.\n",
    ],
    customizes: {
      size: {
        title: "Chose size",
        options: [
          { ...sizeOptions["L"], cost: 40000 },
          { ...sizeOptions["S"], cost: 35000 },
          { ...sizeOptions["Hot"], cost: 40000 },
        ],
      },
    },
    defaultCustomizes: {
      size: { ...sizeOptions["L"], cost: 40000 },
    },
  },
};
