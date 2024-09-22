import React, { useState } from 'react';
import './archeive.scss'; // Import the updated SCSS file
import Navbar from '../navbar/navbar';

const ArchivePage = () => {

  const initialCardData = [
    { id: 1, title: 'Personal Information ', description: 'Mr. Amit Shah', image:'Health-Records.png' },
    { id: 2, title: 'Medical History ', description: 'Updated by Dr. Sarah James', image:'Medical-History.png'},
  ];

  const [sortOrder, setSortOrder] = useState('default');
  const [cardData, setCardData] = useState(initialCardData);

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    if (order === 'default') {
      setCardData(initialCardData);
    } else if (order === 'a-z') {
      const sortedData = [...initialCardData].sort((a, b) => a.title.localeCompare(b.title));
      setCardData(sortedData);
    }
  };



  return (

    <div className="archive-container">
          <Navbar />

      <header className="archive-header">
        <h1>Archive</h1>
        <p>Preserving patient history.</p>
        <div className="archive-controls">
        <button
          className={`btn ${sortOrder === 'default' ? 'active' : ''}`}
          onClick={() => handleSortOrderChange('default')}
        >
          Default
        </button>
        <button
          className={`btn ${sortOrder === 'a-z' ? 'active' : ''}`}
          onClick={() => handleSortOrderChange('a-z')}
        >
          A-Z
        </button>
       
      </div>
      </header>

      


      <div className={`card-container`}>
        {cardData.map((card) => (
          <div className="archive-card" key={card.id}>
             <img
              src={`/images/${card.image}`}  // This is the key part!
              alt={card.title}
              className="card-image"
            />
            <div className="card-content">
              <h4>{card.title}</h4>
              <h5>Access</h5>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
