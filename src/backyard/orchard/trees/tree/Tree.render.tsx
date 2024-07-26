import { TreeWrapper } from "./Tree.style";
import { useContext } from "react";
import { GardenContext } from "../../../../contexts/GardenContext";

type IProps = {
  type: string;
  isWatered: boolean;
};

const TreeRender = ({ type, isWatered }: IProps) => {
  const value = useContext(GardenContext);

  return (
    <TreeWrapper isWatered={isWatered}>
      {type}
      {value}
    </TreeWrapper>
  );
};
export default TreeRender;
