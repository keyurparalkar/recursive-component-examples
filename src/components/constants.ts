import { nanoid } from "nanoid";
import { Tree } from "./DrawComponents";

export enum ComponentType {
  CONTAINER = "container",
  DIV = "div",
}

export const dataTree: Tree = {
  name: "container1",
  id: nanoid(),
  style: {
    top: 10,
    left: 10,
    width: 100,
    height: 50,
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
      type: ComponentType.DIV,
    },
  ],
};
