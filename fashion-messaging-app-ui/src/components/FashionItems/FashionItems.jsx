import * as React from "react";
import "./FashionItems.css";

export default function Outfits({ photos }) {
    return (
      <div className="photo">
        {photos.map(photo => (
          <img key={photo.id} src={photo.src.original} alt= "" />
        ))}
      </div>
    );
  }
