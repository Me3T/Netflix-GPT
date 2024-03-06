import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { Header } from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

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
