import styled from "styled-components";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

import "./App.css";
import RecursiveTree from "./components/RecursiveTree";
import Timeline from "./components/Timeline";
import Canvas from "./components/DrawComponents";
import { dataTree } from "./components/constants";

const tree1 = {
  id: "Parent 1",
  name: "Parent 1",
  children: [
    {
      id: "Child-1",
      name: "Child-1",
      children: [
        {
          id: "Inner-Child-1",
          name: "Inner-Child-1",
          children: [
            {
              id: "Inner-Inner-Child-1",
              name: "Inner-Inner-Child-1",
            },
          ],
        },
        {
          id: "Inner-Child-2",
          name: "Inner-Child-2",
        },
      ],
    },
    {
      id: "Child-2",
      name: "Child-2",
    },
  ],
};

const tree2 = {
  id: "Parent 1",
  name: "Parent 1",
  children: [
    {
      id: "Child-1",
      name: "Child-1",
      icons: [<CiSquarePlus size={25} />, <CiSquareMinus size={25} />],
      children: [
        {
          id: "Inner-Child-1",
          name: "Inner-Child-1",
          icons: [<CiSquarePlus size={25} />, <CiSquareMinus size={25} />],
          children: [
            {
              id: "Inner-Inner-Child-1",
              name: "Inner-Inner-Child-1",
              icons: [<CiSquarePlus size={25} />, <CiSquareMinus size={25} />],
            },
          ],
        },
        {
          id: "Inner-Child-2",
          name: "Inner-Child-2",
          icons: [<CiSquarePlus size={25} />, <CiSquareMinus size={25} />],
        },
      ],
    },
    {
      id: "Child-2",
      name: "Child-2",
      icons: [<CiSquarePlus size={25} />, <CiSquareMinus size={25} />],
    },
  ],
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min(80px) 1fr 1fr;
  color: white;
  text-align: center;

  & .heading {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const StyledContainer = styled.div`
  min-width: 200px;
  border: 2px dashed #cacaca52;

  &.custom {
    display: grid;
    grid-template-rows: min(50px) 1fr;
  }
`;

function App() {
  return (
    <StyledGrid>
      <h1 className="heading">Recursive Component Examples</h1>
      <StyledContainer>
        <h2>Simple Tree</h2>
        <RecursiveTree tree={tree1} />
      </StyledContainer>
      <StyledContainer>
        <h2>Tree with Custom Icons</h2>
        <RecursiveTree tree={tree2} />
      </StyledContainer>
      <StyledContainer>
        <h2>Timeline component</h2>
        <Timeline />
      </StyledContainer>
      <StyledContainer className="custom">
        <h2>Draw Element component</h2>
        <Canvas tree={dataTree} />
      </StyledContainer>
    </StyledGrid>
  );
}

export default App;
