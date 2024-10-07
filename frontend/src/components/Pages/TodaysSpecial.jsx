import React, { useState, useEffect } from 'react';
import cappuccino from '../../assets/TSimg/cappuccino.webp';
import lemonade from '../../assets/TSimg/lemonade.webp';
import pasta_primavera from '../../assets/TSimg/pasta_primavera.webp';
import espresso from '../../assets/TSimg/espresso.webp';
import mango_smoothie from '../../assets/TSimg/mango_smoothie.webp';
import cheese_sandwich from '../../assets/TSimg/cheese_sandwich.webp';
import latte from '../../assets/TSimg/latte.webp';
import iced_tea from '../../assets/TSimg/iced_tea.webp';
import caesar_salad from '../../assets/TSimg/caesar_salad.webp';

const menuItems = {
  coffee: [
    { name: "Espresso", description: "Rich and bold coffee shot.", image: espresso },
    { name: "Cappuccino", description: "Creamy coffee with frothy milk.", image: cappuccino },
    { name: "Latte", description: "Smooth coffee with steamed milk.", image: latte },
  ],
  drinks: [
    { name: "Mango Smoothie", description: "Refreshing mango blend.", image: mango_smoothie },
    { name: "Lemonade", description: "Zesty and chilled lemonade.", image: lemonade },
    { name: "Iced Tea", description: "Cool iced tea with lemon.", image: iced_tea },
  ],
  food: [
    { name: "Cheese Sandwich", description: "Toasted sandwich with cheese.", image: cheese_sandwich },
    { name: "Pasta Primavera", description: "Veggies and pasta in a light sauce.", image: pasta_primavera },
    { name: "Caesar Salad", description: "Crispy salad with Caesar dressing.", image: caesar_salad },
  ],
};

const TodaysSpecial = () => {
  const [todaysSpecial, setTodaysSpecial] = useState({ coffee: {}, drink: {}, food: {} });

  // Function to update today's special (cycling through 3 items)
  const updateTodaysSpecial = () => {
    const today = new Date();
    const dayIndex = today.getDay(); // Get the day of the week (0-6)
    const cycleIndex = dayIndex % 3; // Cycle through 3 items every 3 days

    setTodaysSpecial({
      coffee: menuItems.coffee[cycleIndex],
      drink: menuItems.drinks[cycleIndex],
      food: menuItems.food[cycleIndex],
    });
  };

  useEffect(() => {
    updateTodaysSpecial();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-center mb-9">Today's Special</h2>
      <div className="flex flex-col md:flex-row justify-around items-center mb-8 space-y-8 md:space-y-0 md:space-x-4">
        <div className="card bg-pink-100 p-4 rounded-lg shadow-lg max-w-xs text-center">
          <img className="w-64 h-48 object-cover object-center rounded-md mb-4" src={todaysSpecial.coffee.image} alt={todaysSpecial.coffee.name} />
          <h3 className="text-xl font-semibold">{todaysSpecial.coffee.name}</h3>
          <p className="text-gray-600">{todaysSpecial.coffee.description}</p>
        </div>
        <div className="card bg-teal-100 p-4 rounded-lg shadow-lg max-w-xs text-center">
          <img className="w-64 h-48 object-cover object-center rounded-md mb-4" src={todaysSpecial.food.image} alt={todaysSpecial.food.name} />
          <h3 className="text-xl font-semibold">{todaysSpecial.food.name}</h3>
          <p className="text-gray-600">{todaysSpecial.food.description}</p>
        </div>
        <div className="card bg-pink-100 p-4 rounded-lg shadow-lg max-w-xs text-center">
          <img className="w-64 h-48 object-cover object-center rounded-md mb-4" src={todaysSpecial.drink.image} alt={todaysSpecial.drink.name} />
          <h3 className="text-xl font-semibold">{todaysSpecial.drink.name}</h3>
          <p className="text-gray-600">{todaysSpecial.drink.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysSpecial;
