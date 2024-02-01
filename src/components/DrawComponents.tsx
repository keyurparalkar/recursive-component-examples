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
  width: 100%;
  /* height: 100%; */
  border: 2px solid white;
`;

const DrawComponent = (props: DrawComponentProps) => {
  const { tree } = props;

  if (tree.type === ComponentType.DIV) {
    return <div style={{ position: "absolute", ...tree.style }}></div>;
  }

  return (
    <div style={{ position: "absolute", ...tree.style }}>
      {tree.children &&
        tree.children.map((child) => <DrawComponent tree={child} />)}
    </div>
  );
};

const Canvas = (props: DrawComponentProps) => {
  const { tree } = props;
  return (
    <StyledCanvas className="canvas">
      <DrawComponent tree={tree} />
    </StyledCanvas>
  );
};

export default Canvas;
