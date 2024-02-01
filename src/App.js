import logo from "./logo.svg";
import "./App.css";
import Fruit from "./Fruit";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


  render() 
    return (
      <CarouselProvider orientation="horizontal" naturalSlideWidth="100" naturalSlideHeight="125">
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={3}>I am the third Slide.</Slide>
          <Slide index={4}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
    );
  


const data = [
  {
    id: 1,
    img: "https://thumbs.dreamstime.com/b/red-apple-leaf-slice-white-background-29914331.jpg",
    title: "Appale",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 2,
    img: "https://cdn.britannica.com/36/160636-050-B1DC5C0A/Laetrile-apricot-pits.jpg",
    title: "apricot",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 3,
    img: "https://www.shutterstock.com/image-photo/banana-cluster-isolated-600nw-575528746.jpg",
    title: "banana,",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg",
    title: "kiwi",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8nGrvLPYEeJpZpaJ4fsLpCyECifthMKEohHvXJyZ0w&s",
    title: "orange",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 6,
    img: "https://thumbs.dreamstime.com/b/pomegranate-12487135.jpg",
    title: "pomogrenate",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIx7P19Dz13tbmGj9PzkgjDu8TnjSEOMeTp0Q-Jj820A&s",
    title: "stawberry",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 8,
    img: "https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg",
    title: "pineaple",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CpV28z6ENRJBDA1xNRcuBYCDkHT6g9002g&usqp=CAU",
    title: "cucunmber",
    uom: "02",
    size: "02",
    unit: "$8.99",
    total: "$17.89",
  },
];

function App() {
  return (
    <div className="container">
      {data.map((value, index) => {
        return (
          <div>
            <Fruit data={value}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
