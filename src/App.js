import backgroundImage from "./Assets/sunset_architecture_mosque_123964_1920x1080.jpg";
import { CardPayer } from "./Compenets/CardPayer";
function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          transform: "translate(-30%, -20%)",
          zIndex: 1,
        }}
      >
        <CardPayer />
      </div>
    </>
  );
}

export default App;
