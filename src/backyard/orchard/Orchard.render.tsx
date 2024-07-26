import { OrchardWrapper } from "./Orchard.style";
import React, { useEffect } from "react";
import TreesRender from "./trees";

type IProps = {
  trees: Array<string>;
  isWatered: boolean;
};

const OrchardRender: React.FC<IProps> = ({ trees, isWatered }: IProps) => {
  return (
    <OrchardWrapper>
      <TreesRender isWatered={isWatered} trees={trees} />
    </OrchardWrapper>
  );
};

export default OrchardRender;
