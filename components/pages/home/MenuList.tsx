import { mockDrinkImg } from "@/constants/mockData";
import { MenuItem } from "./MenuItem";

export const MenuList = () => {
  return (
    <>
      <MenuItem
        title="Drinks"
        items={Array(7)
          .fill(0)
          .map((_, index) => ({
            id: index,
            title: "Hot Coffees",
            icon: mockDrinkImg,
          }))}
      />

      <MenuItem
        title="Foods"
        items={Array(6)
          .fill(0)
          .map((_, index) => ({
            id: index,
            title: "Hot Coffees",
            icon: mockDrinkImg,
          }))}
      />

      <MenuItem
        title="At Home Coffee"
        items={Array(3)
          .fill(0)
          .map((_, index) => ({
            id: index,
            title: "Hot Coffees",
            icon: mockDrinkImg,
          }))}
      />

      <MenuItem
        title="Merchandise"
        items={Array(5)
          .fill(0)
          .map((_, index) => ({
            id: index,
            title: "Hot Coffees",
            icon: mockDrinkImg,
          }))}
      />
    </>
  );
};
