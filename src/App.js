import React from 'react';
import Story from './Components/Story';
import RenderingGif from './Components/RenderingGif';
import Header from './Components/Header';
import BlackBox from './Components/BlackBox';
import List from './Components/List';
import Fixed from './Components/Fixed';

export default  function App() {
  return (
    <div>
  <Header />
   <Story />
   <RenderingGif />
   <BlackBox />
   <List />
   <Fixed />
   
   </div>
  
  )
}