import React from 'react';

interface SearchResultCardProps {
  // Define your props here, e.g.,
  title: string;
  description: string;
  imageUrl?: string;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="SearchResultCard">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SearchResultCard;