import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import menu1 from "../../src/assets/images/fruits/fruits.jpg";
import menu2 from "../../src/assets/images/desserts/d7.jpg";
import menu3 from "../../src/assets/images/cake/c12.jpg";
import menu4 from "../../src/assets/images/noodles/n7.jpg";
import menu5 from "../../src/assets/images/pasta/p3.jpg";
import menu6 from "../../src/assets/images/rolls/r11.jpg";
import menu7 from "../../src/assets/images/salad/s2.jpg";
import menu8 from "../../src/assets/images/sandwitch/sand6.jpg";

import f1 from "../../src/assets/images/fruits/apple.png";
import f2 from "../../src/assets/images/fruits/grapes.png";
import f3 from "../../src/assets/images/fruits/mango.png";
import f4 from "../../src/assets/images/fruits/orange.png";
import f5 from "../../src/assets/images/fruits/pineapple.png";
import f6 from "../../src/assets/images/fruits/strawberry.png";
import f7 from "../../src/assets/images/fruits/watermelon.png";

import d1 from "../../src/assets/images/desserts/d1.jpg";
import d2 from "../../src/assets/images/desserts/d2.jpg";
import d3 from "../../src/assets/images/desserts/d3.jpg";
import d4 from "../../src/assets/images/desserts/d4.jpg";
import d5 from "../../src/assets/images/desserts/d5.jpg";
import d6 from "../../src/assets/images/desserts/d6.jpg";
import d7 from "../../src/assets/images/desserts/d7.jpg";
import d8 from "../../src/assets/images/desserts/d8.jpg";
import d9 from "../../src/assets/images/desserts/d9.jpg";
import d10 from "../../src/assets/images/desserts/d10.jpg";

import c1 from "../../src/assets/images/cake/c1.jpg";
import c2 from "../../src/assets/images/cake/c2.jpg";
import c3 from "../../src/assets/images/cake/c3.jpg";
import c4 from "../../src/assets/images/cake/c4.jpg";
import c5 from "../../src/assets/images/cake/c5.jpg";
import c6 from "../../src/assets/images/cake/c6.jpg";
import c7 from "../../src/assets/images/cake/c7.jpg";
import c8 from "../../src/assets/images/cake/c8.jpg";

import n1 from "../../src/assets/images/noodles/n1.jpg";
import n2 from "../../src/assets/images/noodles/n2.jpg";
import n3 from "../../src/assets/images/noodles/n3.jpg";
import n4 from "../../src/assets/images/noodles/n4.jpg";
import n5 from "../../src/assets/images/noodles/n5.jpg";
import n6 from "../../src/assets/images/noodles/n6.jpg";
import n8 from "../../src/assets/images/noodles/n7.jpg";

import pa1 from "../../src/assets/images/pasta/p1.jpg";
import pa2 from "../../src/assets/images/pasta/p2.jpg";
import pa3 from "../../src/assets/images/pasta/p3.jpg";
import pa4 from "../../src/assets/images/pasta/p4.jpg";
import pa5 from "../../src/assets/images/pasta/p5.jpg";
import pa6 from "../../src/assets/images/pasta/p6.jpg";
import pa7 from "../../src/assets/images/pasta/p7.jpg";
import pa8 from "../../src/assets/images/pasta/p8.jpg";

import r1 from "../../src/assets/images/rolls/r1.jpg";
import r2 from "../../src/assets/images/rolls/r2.jpg";
import r3 from "../../src/assets/images/rolls/r3.jpg";
import r4 from "../../src/assets/images/rolls/r4.jpg";
import r5 from "../../src/assets/images/rolls/r5.jpg";
import r6 from "../../src/assets/images/rolls/r6.jpg";
import r7 from "../../src/assets/images/rolls/r7.jpg";
import r8 from "../../src/assets/images/rolls/r8.jpg";
import r9 from "../../src/assets/images/rolls/r9.jpg";
import r10 from "../../src/assets/images/rolls/r10.jpg";

import s1 from "../../src/assets/images/salad/s1.jpg";
import s2 from "../../src/assets/images/salad/s2.jpg";
import s3 from "../../src/assets/images/salad/s3.jpg";
import s4 from "../../src/assets/images/salad/s4.jpg";
import s5 from "../../src/assets/images/salad/s5.jpg";
import s6 from "../../src/assets/images/salad/s6.jpg";
import s7 from "../../src/assets/images/salad/s7.jpg";
import s8 from "../../src/assets/images/salad/s8.jpg";
import s9 from "../../src/assets/images/salad/s9.jpg";
import s10 from "../../src/assets/images/salad/s10.jpg";

import san1 from "../../src/assets/images/sandwitch/sand1.jpg";
import san2 from "../../src/assets/images/sandwitch/sand2.jpg";
import san3 from "../../src/assets/images/sandwitch/sand3.jpg";
import san4 from "../../src/assets/images/sandwitch/sand4.jpg";
import san5 from "../../src/assets/images/sandwitch/sand5.jpg";
import san6 from "../../src/assets/images/sandwitch/sand6.jpg";
import san7 from "../../src/assets/images/sandwitch/sand7.jpg";

export const assets = {
  c1,
  c2,
};

export const menuList = [
  {
    menuName: "Fruits",
    menuImg: menu1,
  },
  {
    menuName: "Desserts",
    menuImg: menu2,
  },
  {
    menuName: "Cake",
    menuImg: menu3,
  },
  {
    menuName: "Noodles",
    menuImg: menu4,
  },
  {
    menuName: "Pasta",
    menuImg: menu5,
  },
  {
    menuName: "Rolls",
    menuImg: menu6,
  },
  {
    menuName: "Salad",
    menuImg: menu7,
  },
  {
    menuName: "Sandwitch",
    menuImg: menu8,
  },
];

export const foodList = [
  {
    f_id: 1,
    name: "Decadent Chocolate Lava Cake with Gooey Molten Center Delight",
    image: d1,
    price: 100,
    description:
      "Rich chocolate cake with a molten center, offering warm, gooey indulgence in every bite",
    category: "dessert",
  },
  {
    f_id: 2,
    name: "Classic Tiramisu with Rich Coffee and Creamy Mascarpone Layers",
    image: d2,
    price: 40,
    description:
      "Spiced baked apples topped with a golden oatmeal crumble, best enjoyed warm with vanilla ice cream",
    category: "dessert",
  },
  {
    f_id: 3,
    name: "Velvety Cheesecake Topped with Fresh Berries and Sweet Glaze",
    image: d3,
    price: 60,
    description:
      "Creamy cheesecake topped with fresh, vibrant berries and a glossy glaze for a perfectly balanced dessert",
    category: "dessert",
  },

  {
    f_id: 4,
    name: "Warm Apple Crisp with Cinnamon and Golden Oatmeal Crumble",
    image: d4,
    price: 70,
    description:
      "Spiced baked apples topped with a golden oatmeal crumble, best enjoyed warm with vanilla ice cream",
    category: "dessert",
  },

  {
    f_id: 5,
    name: "Chocolate Fudge Cake with Rich Ganache and Mocha Layers",
    image: c1,
    price: 70,
    description:
      "Indulge in a decadent chocolate cake with smooth ganache and coffee essence",
    category: "cake",
  },
  {
    f_id: 6,
    name: "Velvety Cream Cheese Carrot Cake with Nuts and Spices",
    image: c2,
    price: 90,
    description:
      "A soft, spiced cake with creamy cheese frosting, topped with crunchy walnuts",
    category: "cake",
  },
  {
    f_id: 7,
    name: "Classic Red Velvet Cake with Lush Cream Cheese Frosting",
    image: c3,
    price: 70,
    description:
      "Rich, velvety red cake paired with tangy, creamy frosting for ultimate delight",
    category: "cake",
  },
  {
    f_id: 8,
    name: "Rich Banana Cake with Caramelized Sugar and Cream Frosting",
    image: c4,
    price: 60,
    description:
      " Banana cake with a sweet caramel topping, finished with creamy, buttery frosting",
    category: "cake",
  },

  {
    f_id: 9,
    name: "Spicy Szechuan Noodles with Chili Oil and Garlic Scents",
    image: n1,
    price: 60,
    description:
      "A fiery Szechuan noodle dish with bold chili oil, garlic, and spices",
    category: "noodles",
  },
  {
    f_id: 10,
    name: "Classic Pad Thai Noodles with Tofu, Peanuts, and Lime",
    image: n2,
    price: 80,
    description:
      "Stir-fried rice noodles tossed with tofu, peanuts, and tangy lime juice",
    category: "noodles",
  },
  {
    f_id: 11,
    name: "Crispy Chow Mein Noodles with Vegetables and Soy Sauce",
    image: n3,
    price: 40,
    description:
      "Golden fried noodles served with crispy veggies and savory soy-based sauce",
    category: "noodles",
  },
  {
    f_id: 12,
    name: "Garlic Butter Noodles with Parmesan Cheese and Fresh Herbs",
    image: n4,
    price: 70,
    description:
      "A rich, buttery noodle dish tossed with garlic, Parmesan, and fragrant herbs",
    category: "noodles",
  },

  {
    f_id: 13,
    name: "Creamy Alfredo Pasta with Garlic and Parmesan Cheese ",
    image: pa1,
    price: 60,
    description:
      "Rich, creamy Alfredo sauce combined with tender pasta and sprinkled with Parmesan cheese",
    category: "pasta",
  },
  {
    f_id: 14,
    name: "Spaghetti Bolognese with Ground Beef, Tomatoes, and Italian Herbs",
    image: pa2,
    price: 100,
    description:
      "A savory, hearty meat sauce served over spaghetti, with a blend of herbs",
    category: "pasta",
  },
  {
    f_id: 15,
    name: "Penne Arrabbiata with Spicy Tomato Sauce and Fresh Basil",
    image: pa3,
    price: 90,
    description:
      "Penne pasta tossed in a spicy, tangy tomato sauce topped with basil",
    category: "pasta",
  },
  {
    f_id: 16,
    name: "Fettuccine Carbonara with Crispy Bacon and Egg Cream Sauce",
    image: pa4,
    price: 70,
    description: "Pesto Pasta with Fresh Basil, Pine Nuts, and Olive Oil",
    category: "pasta",
  },

  {
    f_id: 17,
    name: "Vegetarian Spring Rolls with Fresh Veggies and Peanut Dipping Sauce",
    image: r1,
    price: 70,
    description:
      " Crisp spring rolls filled with fresh vegetables, served with creamy peanut dipping sauce",
    category: "rolls",
  },
  {
    f_id: 18,
    name: "Chicken Teriyaki Rolls with Sweet Soy Sauce and Sesame Seeds",
    image: r2,
    price: 60,
    description:
      "Tender chicken wrapped in rice, drizzled with sweet teriyaki sauce and sesame seeds",
    category: "rolls",
  },
  {
    f_id: 19,
    name: "Crispy Egg Rolls with Pork, Shrimp, and Sweet Chili Sauce",
    image: r3,
    price: 100,
    description:
      "Golden, deep-fried egg rolls filled with pork and shrimp, served with chili sauce",
    category: "rolls",
  },
  {
    f_id: 20,
    name: "Beef Wellington Rolls with Mushrooms and Puff Pastry",
    image: r4,
    price: 40,
    description:
      "Juicy beef encased in a mushroom filling, wrapped in crispy puff pastry",
    category: "rolls",
  },

  {
    f_id: 21,
    name: "Mediterranean Chickpea Salad with Cucumber, Tomatoes, and Feta Cheese",
    image: s1,
    price: 60,
    description:
      "A refreshing salad with chickpeas, cucumber, tomatoes, olives, and tangy feta cheese",
    category: "salad",
  },
  {
    f_id: 22,
    name: "Roasted Vegetable Salad with Carrots, Beets, and Arugula",
    image: s2,
    price: 40,
    description:
      "Roasted root vegetables like carrots and beets served on fresh arugula leaves",
    category: "salad",
  },
  {
    f_id: 23,
    name: "Classic Caesar Salad with Romaine, Croutons, and Parmesan Dressing",
    image: s3,
    price: 70,
    description:
      "Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and grated Parmesan",
    category: "salad",
  },
  {
    f_id: 24,
    name: "Kale and Quinoa Salad with Avocado and Lemon Vinaigrette",
    image: s4,
    price: 50,
    description:
      "Nutritious kale and quinoa mixed with creamy avocado and tangy lemon dressing",
    category: "salad",
  },

  {
    f_id: 25,
    name: "Classic Club Sandwich with Turkey, Bacon, Lettuce, and Tomato",
    image: san1,
    price: 60,
    description:
      "A triple-layered sandwich with turkey, crispy bacon, fresh lettuce, and tomato",
    category: "sandwitch",
  },
  {
    f_id: 26,
    name: "Grilled Cheese Sandwich with Melted Cheddar and Buttery Bread",
    image: san2,
    price: 90,
    description:
      "Golden, crispy bread filled with gooey, melted cheddar cheese for pure comfort",
    category: "sandwitch",
  },

  {
    f_id: 27,
    name: "Caprese Sandwich with Mozzarella, Tomato, Basil, and Balsamic Drizzle",
    image: san3,
    price: 40,
    description:
      "Fresh mozzarella, ripe tomatoes, and basil layered with tangy balsamic glaze",
    category: "sandwitch",
  },

  {
    f_id: 28,
    name: "Chicken Caesar Sandwich with Romaine Lettuce and Parmesan Dressing",
    image: san4,
    price: 65,
    description:
      "Juicy grilled chicken, crisp romaine, and Caesar dressing on toasted bread",
    category: "sandwitch",
  },

  {
    f_id: 29,
    name: "Apple Delight Salad with Walnuts and Cinnamon Honey Dressing",
    image: f1,
    price: 65,
    description:
      "Crisp apple slices tossed with crunchy walnuts and sweet cinnamon honey dressing",
    category: "fruits",
  },

  {
    f_id: 30,
    name: "Grape and Cheese Platter with Herbs and Crackers",
    image: f2,
    price: 45,
    description:
      "Juicy grapes paired with assorted cheeses, herbs, and crispy crackers for snacking",
    category: "fruits",
  },
  {
    f_id: 31,
    name: "Mango Tango Smoothie with Coconut Milk and Lime Zest",
    image: f3,
    price: 95,
    description:
      "A creamy tropical mango smoothie with coconut milk, lime zest, and natural sweetness",
    category: "fruits",
  },
  {
    f_id: 32,
    name: "Orange Citrus Cake with Zesty Glaze and Fresh Orange Slices",
    image: f4,
    price: 75,
    description:
      "A moist citrus cake infused with orange zest, topped with a tangy glaze",
    category: "fruits",
  },
];
