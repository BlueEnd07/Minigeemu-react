import Headder from "./Headder";
import Cardcoll from "./cardcoll";
import Foot from "./foot";

function App() {
  return (
    <>
      <div className=" m-0 p-0 xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-lg align-middle mx-auto justify-center  ">
        <Headder />
        <Cardcoll />
        <br /><br />
        <Foot />
      </div>
    </>
  );
}

export default App;
