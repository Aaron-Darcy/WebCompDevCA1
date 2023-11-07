// MenuitemData.js
// Individual image imports
import tea from '../assets/images/tea.png';
import coffee from '../assets/images/coffee.png';
import cappuccino from '../assets/images/cappucino.png';
import coke from '../assets/images/coke.png';
import fanta from '../assets/images/fanta.png';
import sevenup from '../assets/images/7up.png';
import burgerchips from '../assets/images/burgerchips.png';
import fishchips from '../assets/images/fishchips.png';
import kebabchips from '../assets/images/kebabchips.png';

// Default image
export const defaultImage = require('../assets/images/defaultimage.jpeg');
export const coldDrinksMenuImage = require('../assets/images/colddrinkmenu.jpeg');

// Array For each menu item
const hotDrinkItems = [
  {
      id: 1,
      name: "Tea",
      price: 1.50,
      qty: 0,
      img: tea
  },
  {
      id: 2,
      name: "Coffee",
      price: 1.50,
      qty: 0,
      img: coffee
  },
  {
      id: 3,
      name: "Cappuccino",
      price: 1.50,
      qty: 0,
      img: cappuccino
  }
]

const coldDrinkItems = [
  {
      id: 4,
      name: "Coke",
      price: 1.50,
      qty: 0,
      img: coke
  },
  {
      id: 5,
      name: "Fanta",
      price: 1.50,
      qty: 0,
      img: fanta
  },
  {
      id: 6,
      name: "7Up",
      price: 1.50,
      qty: 0,
      img: sevenup
  }
]


const foodItems = [
  {
      id: 7,
      name: "Burger & Chips",
      price: 7.50,
      qty: 0,
      img: burgerchips
  },
  {
      id: 8,
      name: "Fish & Chips",
      price: 7.50,
      qty: 0,
      img: fishchips
  },
  {
      id: 9,
      name: "Kebab & Chips",
      price: 7.50,
      qty: 0,
      img: kebabchips
  }
]


export  {hotDrinkItems,coldDrinkItems,foodItems }