import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { Header } from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
    <
        -Video Background
        -Video Titke
       SecondaryContainer
        -MovieList * n
        -cards * n


    */}
    </div>
  );
};
