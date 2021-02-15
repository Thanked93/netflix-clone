import React from "react";
import { ConcatItems } from "./ConcatItems";
import "./Listing.css";

interface ListingProps {
  items: Array<{ name: string }>;
  title: string;
}

const Listing: React.FC<ListingProps> = ({ items, title }) => {
  if (!items) return null;
  const itemAsString = ConcatItems(items);
  return (
    <div className="listing movie">
      <div className="listing__title movie">{`${title}${
        items.length > 1 ? "s:" : ":"
      }`}</div>
      <div className="listing__items movie">
        {itemAsString.length > 80
          ? itemAsString.substring(0, 77) + " and more"
          : itemAsString}
      </div>
    </div>
  );
};

export default Listing;
