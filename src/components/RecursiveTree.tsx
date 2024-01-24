// export type Node = {
//     id: string;
//     name: string;
// }

// export type Tree = {
//     id: string;
//     name: string;
// }

type RecursiveTreeProps = {
  //TODO(Keyur): Create Typings for this recurring object
  tree: any;
};

const RecursiveTree = (props: RecursiveTreeProps) => {
  const { tree } = props;

  return (
    <ul>
      {tree?.children &&
        tree.children.map((item) => (
          <li key={`key-${item.id}`}>
            <details>
              <summary>{item.name}</summary>
              <RecursiveTree tree={item} />
            </details>
          </li>
        ))}
    </ul>
  );
};

export default RecursiveTree;
