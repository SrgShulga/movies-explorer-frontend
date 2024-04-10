import React, { useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import './Movies.css'
import Footer from "../Footer/Footer";
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
  {
    id: 4,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },  {
    id: 5,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    title: "33 слова о дизайне",
    duration: "1ч27м",
    imageUrl: 
    "https://images.unsplash.com/photo-1596641237195-7d2a9ae9cd2a?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]


function Movies() {
  const { setOnSavedPage } = useContext(savedPageContext);
  useEffect(() => setOnSavedPage(false), [setOnSavedPage]);

  return (
    <>
      <Header isAuth={true} modifier={'profile'} />
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList data={allMovies} onMainPage/>
        <div className="movies__btn-container">
          <button className="movies__more-button">Ещё</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movies;