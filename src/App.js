import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden">
      <h1 className="bg-white rounded-sm font-bold text-center mt-[40px] mx-[25px] text-3xl rounded-lg">RANDOM GIFS</h1>
      <div className="flex flex-col items-center  gap-y-10 my-[30px]">
        <Random />

        <Tag />
      </div>
    </div>
  );
}

export default App;
