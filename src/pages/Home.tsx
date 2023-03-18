import { HEADER } from "../config-global";

const Home = () => {
  return (
    <>
      <div
        className="container mx-auto px-4"
        style={{ marginTop: HEADER.H_MAIN_DESKTOP }}
      >
        <div className="flex flex-col items-center">
          <div>
            <p className="text-6xl font-semibold">Hello World</p>
            <p className="mt-2 text-3xl font-bold">Boss Thanawat</p>
            <p className="text-3xl font-bold">front-end developer.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
