import React, { useEffect, useState } from "react";
import "./DrinkList.css"; // Import CSS module styles
const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  const [newDrink, setNewDrink] = useState({
    name: "",
    category_id: "",
    brand: "",
    image_url: "",
  });
  useEffect(() => {
    fetchDrinks();
  }, []);
  const fetchDrinks = async () => {
    try {
      const response = await fetch("http://localhost:9292/drinks");
      if (response.ok) {
        const data = await response.json();
        setDrinks(data);
      } else {
        throw new Error("Failed to fetch drinks");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (drinkId) => {
    try {
      const response = await fetch(`http://localhost:9292/drinks/${drinkId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchDrinks(); // Refetch drinks after successful deletion
      } else {
        throw new Error("Failed to delete drink");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddDrink = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9292/drinks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDrink),
      });
      if (response.ok) {
        fetchDrinks(); // Refetch drinks after successful addition
        setNewDrink({
          name: "",
          category_id: "",
          brand: "",
          image_url: "",
        }); // Reset the form
      } else {
        throw new Error("Failed to add drink");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setNewDrink({ ...newDrink, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Add Drink</h2>
      <form onSubmit={handleAddDrink}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newDrink.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category ID:
          <input
            type="number"
            name="category_id"
            value={newDrink.category_id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={newDrink.brand}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={newDrink.image_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Drink</button>
      </form>
      <h2>Drink List</h2>
      <div className='drinkContainer'>
      {drinks.map((drink) => (
        <div key={drink.id}>
          <h3>{drink.name}</h3>
          <p>Category: {drink.category.name}</p>
          <p>Brand: {drink.brand}</p>
          <p>Image: {drink.image_url}</p>
          <button onClick={() => handleDelete(drink.id)}>Delete</button>
        </div>
      ))}
    </div>
    </div>
  );
};
export default DrinkList;