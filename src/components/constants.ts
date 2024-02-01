import { nanoid } from "nanoid";
import { Tree } from "./DrawComponents";

export enum ComponentType {
  CONTAINER = "container",
  RECT = "rect",
  CIRCLE = "circle",
}

export const dataTree: Tree = {
  name: "container1",
  id: nanoid(),
  style: {
    top: 10,
    left: 10,
    width: 300,
    height: 100,
    backgroundColor: "green",
  },
  type: ComponentType.CONTAINER,
  children: [
    {
      name: "div1",
      id: nanoid(),
      style: {
        top: 12,
        left: 15,
        width: 50,
        height: 20,
        backgroundColor: "red",
      },
      type: ComponentType.RECT,
    },
    {
      name: "div2",
      id: nanoid(),
      style: {
        top: 40,
        left: 35,
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "black",
      },
      type: ComponentType.CIRCLE,
    },
  ],
};
