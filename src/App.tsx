import styled from "styled-components";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

import "./App.css";
import RecursiveTree from "./components/RecursiveTree";

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
      icon: [CiSquarePlus, CiSquareMinus],
      children: [
        {
          id: "Inner-Child-1",
          name: "Inner-Child-1",
          icon: [CiSquarePlus, CiSquareMinus],
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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr min(200px);
  color: white;
  text-align: center;

  & .heading {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const StyledContainer = styled.div`
  min-width: 200px;
`;

function App() {
  return (
    <StyledGrid>
      <h1 className="heading">Recursive Component Examples</h1>
      <StyledContainer>
        <RecursiveTree tree={tree1} />
      </StyledContainer>
      <StyledContainer>
        <RecursiveTree tree={tree2} />
      </StyledContainer>
      <StyledContainer>
        <RecursiveTree tree={tree1} />
      </StyledContainer>
    </StyledGrid>
  );
}

export default App;
