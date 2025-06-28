import React from 'react'
import Navbar from '../navbar/Navbar'
// import ItemCard from "../cards/itemCard/ItemCard.jsx"
import CardList from '../cards/cardList/CardList.jsx'
import { useCardContext } from '../../context/CardContext.jsx'

const Home = () => {
  const { cards, loading } = useCardContext();

  if (loading) return <p>Cargando cartas...</p>;
  return (
    <div>
      <Navbar/>
      {/* <ItemCard/> */}
      <CardList cards={cards} />
    </div>
  )
}

export default Home
