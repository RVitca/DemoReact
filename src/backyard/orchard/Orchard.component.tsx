import React, { useEffect } from "react";
import OrchardRender from "./Orchard.render";
import axios from "axios";

type IProps = {
  isWatered: boolean;
};

const OrchardComponent = ({ isWatered }: IProps) => {
  // axios
  //   .post("https://eouo81qo4jvj4y7.m.pipedream.net", {
  //     trees2,
  //   })
  //   .then(
  //     (response: any) => {
  //       console.log(response);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     },
  //   );
  //
  console.log("HJSBXHJSBXHSBXSHJBSXHJBSXHJXSB");
  useEffect(() => {
    axios
      .get("https://mt-insights.breadcrumbsinteractive.com/api/metrics")
      .then((response) => {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
  }, []);

  return <OrchardRender isWatered={isWatered} trees={["copac1", "copac2"]} />;
};

export default OrchardComponent;
