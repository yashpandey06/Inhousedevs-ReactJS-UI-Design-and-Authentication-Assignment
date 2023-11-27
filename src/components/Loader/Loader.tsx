import { Hourglass } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Hourglass height="70" width="70"  ariaLabel="loading" />;
    </div>
  );
}

export default Loader;
