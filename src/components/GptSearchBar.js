import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";
import Loader from "./Loader";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);

  // search movies in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setLoading(true);
    console.log(searchText.current.value);
    // make an API call to GPT API and get movie results
    const prompt =
      "Act as a Movie Recommendation system and suggest some movvies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies , commma seperated like the example result given ahead. Example Result:Gadar, Sholay ,Don ,Golmaal ,Koi Mil Gaya";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const movies = text.split(",");

    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    if (tmdbResults) setLoading(false);
    console.log(tmdbResults);

    dispatch(
      addGeminiMovieResult({ movieNames: movies, movieResults: tmdbResults })
    );
  };
  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="pt-[35%] md:pt-[15%] flex justify-center">
        <form
          className="w-full bg-black md:w-1/2 grid grid-cols-12 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-2 m-4 col-span-9 focus:outline-none input-shadow"
            placeholder={lang[langKey]?.gptSearchPlaceholder}
          />
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded"
          >
            {lang[langKey]?.search}
          </button>
        </form>
      </div>
      <div>
        <GptMovieSuggestions />
      </div>
              
    </div>
  );
};

export default GptSearchBar;
