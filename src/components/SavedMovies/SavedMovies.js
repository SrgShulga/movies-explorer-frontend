import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedPageContext from "../../contexts/savedPageContext";

const allMovies = [
  {
    id: 1,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl:
      "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl:
      "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl:
      "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

function SavedMovies() {

  const { onSavedPage, setOnSavedPage } = useContext(savedPageContext);
  useEffect(() => setOnSavedPage(true), [setOnSavedPage]);

  return (
    <>
      <Header isAuth={true} modifier="profile" /><section className="saved-movies-page">
        <div className="movies__container movies__container_type_saved-page">
          <SearchForm />
          <MoviesCardList data={allMovies} onSavedPage={onSavedPage} />
        </div>
      </section><Footer />
    </>
  )
}

export default SavedMovies;