import { TreesWrapper } from "./Trees.sty";
import FruitTreesRender from "./fruit-trees";

type IProps = {
  isWatered: boolean;
  trees: String[];
};

const TreesRender = ({ trees, isWatered }: IProps) => {
  return (
    <TreesWrapper>
      <FruitTreesRender trees={trees} isWatered={isWatered} />
    </TreesWrapper>
  );
};

export default TreesRender;
