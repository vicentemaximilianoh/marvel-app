import React from "react";
import { useAxiosLoader } from "../../hooks/use-axios-loader";
import './MvlLoader.scss';

function MvlLoader() {
  const [loading] = useAxiosLoader();

  const loader = (
    <div className="MvlLoader">
      <div className="MvlLoaderSpinner"></div>
    </div>
  );

  return <div>{loading ? loader : null}</div>;
}

export default MvlLoader;
