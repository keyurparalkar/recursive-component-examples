import styled from "styled-components";
import { IconType } from "react-icons/lib";

type Tree = {
  id: string;
  name: string;
  icon?: IconType;
  children?: Tree[];
};

type RecursiveTreeProps = {
  tree: Tree;
};

/**
 * Difference between Pick<Tree, "icon"> and Tree['icon']
 * Pick<Tree, "icon"> will return { icon?: IconType };
 * Tree['icon'] will return IconType
 *
 * In below icon property if you do this icon: Pick<Tree,"icon"> then it will throw error.
 * Because You are referring to an object as above. To solve that either do:
 * ---- icon: Pick<Tree,"icon">['icon']
 * OR
 * ---- icon: Tree['icon']
 */
type DetailsProps = {
  icon: Tree["icon"];
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
`;

const StyledDetails = styled.details<DetailsProps>`
  & summary {
    text-align: left;
    ${(props) => props.icon && "list-style: none;"}
  }
`;

const RecursiveTree = (props: RecursiveTreeProps) => {
  const { tree } = props;

  return (
    <StyledUnorderedList>
      {tree?.children &&
        tree.children.map((item) => (
          <li key={`key-${item.id}`}>
            <StyledDetails icon={item.icon}>
              <summary>
                {item.icon && <item.icon />}
                {item.name}
              </summary>
              <RecursiveTree tree={item} />
            </StyledDetails>
          </li>
        ))}
    </StyledUnorderedList>
  );
};

export default RecursiveTree;
