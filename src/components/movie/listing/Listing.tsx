import React from "react";
import "./Listing.css";

interface ListingProps {
  items: string[];
  title: string;
}

const Listing: React.FC<ListingProps> = ({ items, title }) => {
  if (!items || items.length === 0) return null;
  const itemAsString = items.join(", ");
  return (
    <div className="listing movie">
      <div className="listing__title movie">{`${title}${
        items.length > 1 ? "s:" : ":"
      }`}</div>
      <div className="listing__items movie">
        {itemAsString.length > 80
          ? itemAsString.substring(0, 73) + "... and more"
          : itemAsString}
      </div>
    </div>
  );
};

export default Listing;
