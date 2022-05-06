import React, { useState } from 'react';
import Card from './Card.jsx';
import CardData from './CardInfo.jsx';
import './index.css';
import Navbar from './Navbar.jsx';

const uniqueList = [...new Set(CardData.map((card)=>{
  return card.Category
  
})),"All"];
//console.log({uniqueList});

const MyApp = ()=> {
  const [cardInfo, setCardInfo]=useState(CardData);
  //console.log(cardInfo);
  const [cardList, setCardList]=useState(uniqueList);

  const filterName = (category)=>{

      if(category==='All') {
        return setCardInfo(CardData);
      }
    const updatedList = CardData.filter((item)=>{
      return item.Category===category;
    });
    setCardInfo(updatedList);
    //console.log(cardInfo);
  }
  return (
    <> 
     
      <Navbar filterName={filterName} cardList={cardList}/>
      <Card cardInfoData={cardInfo}/>
      
    </>
  )}

export default MyApp;