"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "../../components/destination/PlanetCard";
import PlanetWishlistItem from "../../components/destination/PlanetWishlistItem";

const allPlanets = [
  {
    id: 1,
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "image-europa.png",
  },
  {
    id: 2,
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "image-mars.png",
  },
  {
    id: 3,
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "image-moon.png",
  },
  {
    id: 4,
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [wishlists, setWishlists] = useState([]);

  let isPlanetSelected = false;
  let numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name, index) => {
    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
    onAddPlanet((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(name);
      console.log(
        `You seleceted the following planet: ${name}, with the index of ${index}`
      );
      if (isAlreadySelected) {
        return prevSelected.filter((planet) => planet !== name);
      } else {
        return [...prevSelected, name];
      }
    });
    console.log(selectedPlanets);
  };

  const handleAddWishlistItem = (wishlistName, thembnail) => {
    if (!wishlistName.trim()) {
      console.error("Wishlist name cannot be empty!");
      return;
    }
    const newWishlistItem = {
      id: wishlists.length + 1,
      wishlistName: wishlistName,
      wishlistPlanets: [...selectedPlanets],
      thumbnail: thembnail,
    };

    setWishlists((prevWishlists) => {
      const esixtingWishlist = prevWishlists.find(
        (item) => item.wishlistName.toLowerCase() === wishlistName.toLowerCase()
      );
      if (esixtingWishlist) {
        alert("Wishlist name already exists!");
        return prevWishlists;
      }
      return [...prevWishlists, newWishlistItem];
    });
    onAddPlanet([]);
  };

  const removeFromWishlist = (name) => {
    setWishlists((prevWishlists) =>
      prevWishlists.filter(
        (wishlist) => wishlist.wishlistName.toLowerCase() !== name.toLowerCase()
      )
    );
  };

  console.log("Current selected planets:", selectedPlanets);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}

          {/* <b>List coming soon after lesson 3!</b> */}

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem} />
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {wishlists.map((wishlist) => (
              <PlanetWishlistItem
                key={wishlist.id}
                name={wishlist.wishlistName}
                onRemove={() => removeFromWishlist(wishlist.wishlistName)}
                thumbnail={wishlist.thumbnail}
              />
            ))}
            {/* <PlanetWishlistItem
              name="europa"
              onRemove={() => removeFromWishlist("europa")}
              thumbnail="/destination/image-europa.png"
            /> */}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}
          {allPlanets.map((planet, index) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isPlanetSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
              index={index}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
