import Orchard from "./orchard";
import { BackyardWrapper, ScreenName, WaterPlants } from "./Backyard.style";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import { GardenContext } from "../contexts/GardenContext";

const BackyardRender = () => {
  const [isWatered, setBackyardWater] = useState(false);

  useEffect(() => {
    console.log("ONE RENDER");
  }, []);

  useEffect(() => {
    console.log("ONE RENDER2");
  });

  useEffect(() => {
    console.log("ONE RENDER3");
  }, [isWatered]);

  return (
    <GardenContext.Provider value={"text"}>
      <BrowserRouter>
        <BackyardWrapper>
          <Header />
          <ScreenName>Name</ScreenName>
          <WaterPlants onClick={() => setBackyardWater(!isWatered)}>
            Water
          </WaterPlants>
          <Routes>
            <Route index element={<></>}></Route>
            <Route path="orchard" element={<Orchard isWatered={isWatered} />} />
          </Routes>
        </BackyardWrapper>
      </BrowserRouter>
    </GardenContext.Provider>
  );
};

export default BackyardRender;
