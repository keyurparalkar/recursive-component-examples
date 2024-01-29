import styled from "styled-components";
import { ReactElement, useState } from "react";

type Tree = {
  id: string;
  name: string;
  icons?: JSX.Element[];
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
// type DetailsProps = {
//   icon: Tree["icon"];
// };

interface CustomDetailsProps extends Omit<Tree, "id"> {
  renderTree: ReactElement;
}

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

const StyledDetails = styled.details`
  & summary {
    text-align: left;
  }

  & summary.custom-icons {
    display: flex;
    align-items: center;
    list-style: none;

    & span {
      margin-left: 0.525rem;
    }
  }
`;

const CustomDetails = (props: CustomDetailsProps) => {
  const { icons, name, renderTree } = props;
  const [isOpen, setIsOpen] = useState(false);

  const hasIcons = icons && icons.length > 0;

  const handleDrawerOpen = (
    e: React.SyntheticEvent<HTMLDetailsElement, ToggleEvent>
  ) => {
    // This stops event bubbling;
    e.stopPropagation();
    setIsOpen(e.nativeEvent.newState === "open" ? true : false);
  };

  return (
    <StyledDetails onToggle={handleDrawerOpen}>
      <summary className={hasIcons ? "custom-icons" : undefined}>
        {hasIcons && (isOpen ? icons[1] : icons[0])}
        <span>{name}</span>
      </summary>
      {renderTree}
    </StyledDetails>
  );
};

const RecursiveTree = (props: RecursiveTreeProps) => {
  const { tree } = props;

  return (
    <StyledUnorderedList>
      {tree?.children &&
        tree.children.map((item) => (
          <li key={`key-${item.id}`}>
            <CustomDetails
              icons={item.icons}
              name={item.name}
              renderTree={<RecursiveTree tree={item} />}
            />
          </li>
        ))}
    </StyledUnorderedList>
  );
};

export default RecursiveTree;
