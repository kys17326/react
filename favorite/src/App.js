import React from "react";

const foods = [
  {
    id: 1,
    name: "Tonkatsu",
    image: "http://www.foodnews.news/data/photos/20210415/art_16182009993946_d23de2.jpg",
    rating: 1
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://cdn.newsian.co.kr/news/photo/202404/68480_48276_1458.jpg",
    rating: 2
  },
  {
    id: 3,
    name: "Kimbap",
    image: "https://dimg.donga.com/wps/NEWS/IMAGE/2024/05/02/124762660.8.jpg",
    rating: 3
  }
]

function Food({id, name, picture}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img key={id} src={picture} alt={name}/>
    </div>
  )
}

function renderFood(food) {
  return <Food key={food.id} name={food.name} picture={food.image}></Food>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foods.map((food) => 
        (<Food key={food.id} name={food.name} picture={food.image}></Food>)
        // renderFood(food)
      )}
    </div>
  );
}

export default App;
