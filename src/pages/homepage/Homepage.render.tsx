import { HomepageWrapper, CheckCard } from "./Homepage.style";
import { useEffect, useState } from "react";

const HomepageRender = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("ONE RERENDER");
  }, []);

  useEffect(() => {
    console.log("RERENDER EVERY TIME");
  });

  useEffect(() => {
    console.log("CONDITIONAL RERENDER");
  }, [isChecked]);

  return (
    <HomepageWrapper>
      <CheckCard onClick={() => setIsChecked(!isChecked)}>Check!</CheckCard>
    </HomepageWrapper>
  );
};

export default HomepageRender;
