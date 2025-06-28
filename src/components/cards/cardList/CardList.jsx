import React, { useState, useEffect } from 'react';
import Pagination from '../../pagination/Pagination';
import ItemCard from '../../cards/itemCard/ItemCard';

const CardList = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    setCurrentPage(1);
  }, [cards]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className="card-list">
        {currentCards.map((card) => (
          <ItemCard key={card.id} {...card} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CardList;