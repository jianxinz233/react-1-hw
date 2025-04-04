"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );
  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>
  const [input, onInputChange] = useState({
    id: "customWishlist",
    type: "text",
    name: "",
  });

  const handleThumbnailChange = (e) => {
    const selectedPlanet = e.target.value;
    onThumbnailChange(`/destination/image-${selectedPlanet}.png`);
  };

  const handleInputChange = (e) => {
    onInputChange((prevInput) => ({ ...prevInput, name: e.target.value }));
  };

  const onAddItemPressed = (e) => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
    e.preventDefault();
    if (!input.name.trim()) {
      console.log("Wishlist's name cannot be empty!");
      return;
    }
    if (onAddWishlistItem) {
      onAddWishlistItem(input.name, thumbnail);
    } else {
      console.error("onAddWishlistItem function is not provided.");
    }

    onInputChange((prevInput) => ({ ...prevInput, name: "" }));
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={input.name}
        onChange={handleInputChange}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" onChange={handleThumbnailChange}>
        <option value="europa">EUROPA</option>
        <option value="mars">MARS</option>
        <option value="moon">MOON</option>
        <option value="titan">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
