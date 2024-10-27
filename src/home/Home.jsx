import React,{useEffect} from "react";
import Hero from "./Hero";
import Shop from "../shop/Shop.jsx";
import VideoPlayer from "../components/VideoPlayer";
import ShowRoom from '../components/ShowRoom.jsx';
import Shops from '../shop/Shops.jsx'

export default function Home() {

  useEffect(() => {
    window.scroll(0, 0);
  
  }, []);
  
  return (
    <div>
      <Hero />
      <Shop />
      <VideoPlayer />
      <Shops />
      <ShowRoom />
      
      
    
      
    </div>
  );
}
  