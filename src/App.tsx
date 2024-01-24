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

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RecursiveTree tree={tree} />
    </div>
  );
}

export default App;
