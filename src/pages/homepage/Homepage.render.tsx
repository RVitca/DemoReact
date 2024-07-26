import { HomepageWrapper, CheckCard } from "./Homepage.style";

const HomepageRender = () => {
  return (
    <HomepageWrapper>
      <div
        style={{
          gridArea: "main",
          height: "100%",
          width: "100%",
          fontSize: "200px",
          textAlign: "center",
        }}
      >
        SALUT
      </div>
    </HomepageWrapper>
  );
};

export default HomepageRender;
