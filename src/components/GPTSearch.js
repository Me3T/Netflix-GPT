import React from "react";
import GptSearchBar from "./GptSearchBar";

import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
      </div>
    </>
  );
};

export default GPTSearch;
