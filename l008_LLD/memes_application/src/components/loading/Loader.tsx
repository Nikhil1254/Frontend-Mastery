import Card from "../shimmer/Card";

const Loader = () => {
  return<>{ new Array(20).fill(-1).map(() => <Card />)}</>;
};

export default Loader;
