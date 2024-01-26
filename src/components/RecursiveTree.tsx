import styled from "styled-components";

type Tree = {
  id: string;
  name: string;
  children?: Tree[];
};

type RecursiveTreeProps = {
  tree: Tree;
};

const StyledUnorderedList = styled.ul`
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    margin-left: 1rem;
  }

  details summary {
    text-align: left;
  }
`;

const RecursiveTree = (props: RecursiveTreeProps) => {
  const { tree } = props;

  return (
    <StyledUnorderedList>
      {tree?.children &&
        tree.children.map((item) => (
          <li key={`key-${item.id}`}>
            <details>
              <summary>{item.name}</summary>
              <RecursiveTree tree={item} />
            </details>
          </li>
        ))}
    </StyledUnorderedList>
  );
};

export default RecursiveTree;
