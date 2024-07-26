import Tree from "../tree";

type IProps = {
  trees?: String[];
  isWatered: boolean;
};

const FruitTreesRender = ({ trees, isWatered }: IProps) => {
  return (
    <>
      {trees!.map((tree: any) => (
        <Tree isWatered={isWatered} type={tree} />
      ))}
    </>
  );
};

export default FruitTreesRender;
