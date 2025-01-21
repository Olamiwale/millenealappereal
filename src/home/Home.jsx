import React,{useEffect} from "react";
import Hero from "./Hero";
import Shop from "../shop/Shop.jsx";
import VideoPlayer from "../components/VideoPlayer";
//import ShowRoom from '../components/ShowRoom.jsx';
import Shops from '../shop/Shops.jsx';
import Xmas from '../deal/Xmas.jsx'



export default function Home({videoUrl}) {

  useEffect(() => {
    window.scroll(0, 0);
  
  }, []);
  
  return (
    <div>
      <Hero />
      <Shop />
      {/*<Xmas />*/}
      <VideoPlayer />
      <Shops />
    
    
    {  /*<ShowRoom />*/}
      
      
    
      
    </div>
  );
}
  