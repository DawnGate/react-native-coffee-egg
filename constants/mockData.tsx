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
export const mockBannerTea = require("../assets/images/banners/tea.jpg");
export const mockBannerFood = require("../assets/images/banners/food.jpg");
export const mockBannerSpecialFoods = require("../assets/images/banners/special-foods.jpg");
export const mockBannerBeans = require("../assets/images/banners/beans.jpg");

export const categoriesSignature = require("../assets/images/order/categories/signature.jpg");
export const categoriesRegular = require("../assets/images/order/categories/regular.jpg");
export const categoriesFruit = require("../assets/images/order/categories/fruit.jpg");
export const categoriesFood = require("../assets/images/order/categories/food.jpeg");
export const categoriesTea = require("../assets/images/order/categories/tea.jpg");
export const categoriesSpecialFood = require("../assets/images/order/categories/special-foods.png");
export const categoriesBeans = require("../assets/images/order/categories/beans.jpg");

export const signatureEggCoffee = require("../assets/images/order/signatures/egg-coffee.jpg");
export const signatureEggCacao = require("../assets/images/order/signatures/egg-cacao.jpg");
export const signatureEggMatcha = require("../assets/images/order/signatures/egg-matcha.jpg");

export const regularMilkCoffee = require("../assets/images/order/regulars/milk-coffee.jpeg");
export const regularBlackCoffee = require("../assets/images/order/regulars/black-coffee.png");

export const fruitMangoYogurt = require("../assets/images/order/fruit/mango-yogurt.jpg");
export const fruitAvocadoYogurt = require("../assets/images/order/fruit/avocado-yogurt.jpg");
export const fruitLimeJuice = require("../assets/images/order/fruit/lime-juice.jpg");
export const fruitOrangeJuice = require("../assets/images/order/fruit/orange-juice.jpeg");

export const teaLotusTea = require("../assets/images/order/tea/lotus-tea.jpg");
export const teaJasmineTea = require("../assets/images/order/tea/jasmine-tea.jpg");
export const teaKglTea = require("../assets/images/order/tea/kgl-tea.jpeg");
export const teaPfgTea = require("../assets/images/order/tea/pfg-tea.jpg");
export const teaOrangeCinnamonTea = require("../assets/images/order/tea/orange-cinnamon-tea.jpg");
export const teaHllTea = require("../assets/images/order/tea/hll-tea.jpg");
export const teaPeachTea = require("../assets/images/order/tea/peach-tea.jpg");
export const teaLycheeTea = require("../assets/images/order/tea/lychee-tea.jpeg");

export const foodSsuEgg = require("../assets/images/order/food/sunny-side-up-egg.jpg");
export const foodOmelette = require("../assets/images/order/food/omelette.jpg");
export const foodHamCheeseToast = require("../assets/images/order/food/ham-cheese-toast.jpeg");
export const foodCheeseToast = require("../assets/images/order/food/cheese-toast.jpg");

export const foodChaCom = require("../assets/images/order/special-foods/cha-com.jpg");
export const foodBanhMi = require("../assets/images/order/special-foods/banh-mi.jpeg");

export const beansTrungNguyen = require("../assets/images/order/beans/trung-nguyen.png");
export const beansHighLand = require("../assets/images/order/beans/high-land.png");

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
    imageSource: categoriesTea,
    description: "Diversity of tea, fulfill you taste and mind",
    bannerSource: mockBannerTea,
  },
  {
    id: "food",
    name: "Food",
    imageSource: categoriesFood,
    description: "We include some food for hunger people",
    bannerSource: mockBannerFood,
  },
  {
    id: "special-foods",
    name: "Special Foods",
    imageSource: categoriesSpecialFood,
    description: "Vietnamese should try food",
    bannerSource: mockBannerSpecialFoods,
  },
  {
    id: "beans",
    name: "Beans",
    imageSource: categoriesBeans,
    description: "Take home beans and bag of coffee",
    bannerSource: mockBannerBeans,
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
  {
    id: "egg-cacao",
    name: "Egg Cacao",
    imageSource: signatureEggCacao,
    cost: 40000,
    currency: "đ",
  },
  {
    id: "egg-matcha",
    name: "Egg Matcha",
    imageSource: signatureEggMatcha,
    cost: 40000,
    currency: "đ",
  },
];

const regularItems: IMenuItem[] = [
  {
    id: "black-coffee",
    name: "Black Coffee",
    imageSource: regularBlackCoffee,
    cost: 35000,
    currency: "đ",
  },
  {
    id: "milk-coffee",
    name: "Milk Coffee",
    imageSource: regularMilkCoffee,
    cost: 40000,
    currency: "đ",
  },
];

const fruitItems: IMenuItem[] = [
  {
    id: "mango-yogurt",
    name: "Mango Yogurt",
    imageSource: fruitMangoYogurt,
    cost: 65000,
    currency: "đ",
  },
  {
    id: "avocado-yogurt",
    name: "Avocado Yogurt",
    imageSource: fruitAvocadoYogurt,
    cost: 65000,
    currency: "đ",
  },
  {
    id: "lime-juice",
    name: "Lime Juice",
    imageSource: fruitLimeJuice,
    cost: 40000,
    currency: "đ",
  },
  {
    id: "orange-juice",
    name: "Orange Juice",
    imageSource: fruitOrangeJuice,
    cost: 50000,
    currency: "đ",
  },
];

const teaItems: IMenuItem[] = [
  {
    id: "lotus-tea",
    name: "Lotus Tea",
    imageSource: teaLotusTea,
    cost: 50000,
    currency: "đ",
  },
  {
    id: "jasmine-tea",
    name: "Jasmine Tea",
    imageSource: teaJasmineTea,
    cost: 50000,
    currency: "đ",
  },
  {
    id: "kumquat-ginger-lemongrass-tea",
    name: "Kumquat Ginger Lemongrass Tea",
    imageSource: teaKglTea,
    cost: 55000,
    currency: "đ",
  },
  {
    id: "passion-fruit-ginger-tea",
    name: "Passion Fruit Ginger Tea",
    imageSource: teaPfgTea,
    cost: 55000,
    currency: "đ",
  },
  {
    id: "orange-cinnamon-tea",
    name: "Orange Cinnamon Tea",
    imageSource: teaOrangeCinnamonTea,
    cost: 55000,
    currency: "đ",
  },
  {
    id: "honey-lemongrass-lime-tea",
    name: "Honey Lemongrass Lime Tea",
    imageSource: teaHllTea,
    cost: 55000,
    currency: "đ",
  },
  {
    id: "peach-tea",
    name: "Peach Tea",
    imageSource: teaPeachTea,
    cost: 55000,
    currency: "đ",
  },
  {
    id: "lychee-tea",
    name: "Lychee Tea",
    imageSource: teaLycheeTea,
    cost: 55000,
    currency: "đ",
  },
];

const foodItems: IMenuItem[] = [
  {
    id: "sunny-side-up-egg",
    name: "Sunny Side Up Egg",
    imageSource: foodSsuEgg,
    cost: 80000,
    currency: "đ",
  },
  {
    id: "omelette",
    name: "Omelette",
    imageSource: foodOmelette,
    cost: 80000,
    currency: "đ",
  },
  {
    id: "ham-cheese-toast",
    name: "Ham Cheese Toast",
    imageSource: foodHamCheeseToast,
    cost: 90000,
    currency: "đ",
  },
  {
    id: "cheese toast",
    name: "Cheese Toast",
    imageSource: foodCheeseToast,
    cost: 80000,
    currency: "đ",
  },
];

const specialFoodItems: IMenuItem[] = [
  {
    id: "spring-roll",
    name: "Spring Roll",
    imageSource: foodChaCom,
    cost: 80000,
    currency: "đ",
  },
  {
    id: "banh-mi",
    name: "Banh Mi",
    imageSource: foodBanhMi,
    cost: 30000,
    currency: "đ",
  },
];

const BeansItems: IMenuItem[] = [
  {
    id: "highland-coffee",
    name: "HighLands Coffee",
    imageSource: beansHighLand,
    cost: 250000,
    currency: "đ",
  },
  {
    id: "trung-nguyen-coffee",
    name: "Trung Nguyen Coffee",
    imageSource: beansTrungNguyen,
    cost: 250000,
    currency: "đ",
  },
];

export const mockMenuItems: {
  [key: string]: IMenuItem[];
} = {
  signature: signatureItems,
  regular: regularItems,
  fruit: fruitItems,
  tea: teaItems,
  food: foodItems,
  "special-foods": specialFoodItems,
  beans: BeansItems,
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
