import React from "react";
import Navbar from "../navbar/Navbar";
import CardList from "../cards/cardList/CardList.jsx";
import { useCardContext } from "../../context/CardContext.jsx";

import "./home.css";
const Home = () => {
  const { cards, loading } = useCardContext();

  if (loading) return <p>Cargando cartas...</p>;
  return (
    <div className="div-3">
      <Navbar />
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
