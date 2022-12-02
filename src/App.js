import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {

  const [data, setData] = useState()
  useEffect(() => {
    const getData = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setData(json))
    }
    getData()
  }, [])
  console.log(data);
  return (
    <div className="App">
      <span> * Click your mouse and swipe to slide</span>
      <div className='container'>
        <Swiper
          className='swiper'
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((item) => (
            <SwiperSlide className='card' >
              <img src={item.image} alt={item.title} className="card-img-top" />
              <h5 className="card-title">{item.title.substring(0, 20)}<br /></h5>
              <p>{item.description.substring(0, 60)}...</p>
              <p className="lead">₹{item.price}</p>
              <button className="btn btn-outline-primary">Buy now</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
