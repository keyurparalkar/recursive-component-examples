import styled from "styled-components";
import "./App.css";
import RecursiveTree from "./components/RecursiveTree";

const tree = {
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
        <RecursiveTree tree={tree} />
      </StyledContainer>
      <StyledContainer>
        <RecursiveTree tree={tree} />
      </StyledContainer>
      <StyledContainer>
        <RecursiveTree tree={tree} />
      </StyledContainer>
    </StyledGrid>
  );
}

export default App;
