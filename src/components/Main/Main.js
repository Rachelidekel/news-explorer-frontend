import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";

function Main({isHomePage}) {
  return (
    <main className="main">
      <SearchResults isHomePage={isHomePage}/>
      <About />
    </main>
  );
}

export default Main;
