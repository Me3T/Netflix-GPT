import { PropagateLoader } from "react-spinners";
// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <PropagateLoader
        color="red"
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
