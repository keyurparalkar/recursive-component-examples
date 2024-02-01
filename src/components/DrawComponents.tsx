import styled from "styled-components";
import { ComponentType } from "./constants";

export type Tree = {
  name: string;
  id: string;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
    backgroundColor: string;
    borderRadius?: string;
  };
  type: ComponentType;
  children?: Tree[];
};

type DrawComponentProps = {
  tree: Tree;
};
/**
 * Canvas
 *  ---- Container
 *    ---- Divs
 *    ---- Divs
 *
 *  ---- Container
 *    ---- Divs
 *    ---- Divs
 */
const StyledCanvas = styled.div`
  position: relative;
  border: 2px solid white;
`;

const DrawComponent = (props: DrawComponentProps) => {
  const { tree } = props;

  if (tree.type !== ComponentType.CONTAINER) {
    return <div style={{ position: "absolute", ...tree.style }}></div>;
  }

  return (
    <StyledCanvas style={{ position: "relative", ...tree.style }}>
      {tree.children &&
        tree.children.map((child) => <DrawComponent tree={child} />)}
    </StyledCanvas>
  );
};

const Canvas = (props: DrawComponentProps) => {
  const { tree } = props;
  return <DrawComponent tree={tree} />;
};

export default Canvas;
