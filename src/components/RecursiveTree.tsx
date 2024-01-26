import styled from "styled-components";
import { IconType } from "react-icons/lib";
import { ElementRef, useRef } from "react";

type Tree = {
  id: string;
  name: string;
  icon?: IconType[];
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

  & summary.custom-icon {
    display: flex;
    align-items: center;
    list-style: none;

    & span {
      margin-left: 0.525rem;
    }
  }
`;

const RecursiveTree = (props: RecursiveTreeProps) => {
  const { tree } = props;
  const detailsRef = useRef<ElementRef<"details">>(null);

  // TODO(Keyur): Make this cleaner
  let OpenIcon: IconType, CloseIcon: IconType;
  if (tree.icon) {
    OpenIcon = tree.icon[0];
    CloseIcon = tree.icon[1];
  }

  return (
    <StyledUnorderedList>
      {tree?.children &&
        tree.children.map((item) => (
          <li key={`key-${item.id}`}>
            <StyledDetails ref={detailsRef}>
              <summary
                className={item.icon?.length ? "custom-icon" : "default-icon"}
              >
                {OpenIcon &&
                  CloseIcon &&
                  (detailsRef.current?.open ? (
                    <OpenIcon size={25} />
                  ) : (
                    <CloseIcon size={25} />
                  ))}
                <span>{item.name}</span>
              </summary>
              <RecursiveTree tree={item} />
            </StyledDetails>
          </li>
        ))}
    </StyledUnorderedList>
  );
};

export default RecursiveTree;
