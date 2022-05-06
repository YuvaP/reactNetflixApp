import React from 'react';
import CardData from './CardInfo';
import './index.css';

const Card=({cardInfoData})=>{
  
    return(
        <>
            {cardInfoData.map((item)=>{
                
                //const {id, Link, Category, Title, image_url} = item;
                //destructring did not work for image url (undefined)
                let id = item.id;
                let Category = item.Category;
                let Image = item.Imgsrc;
                let Link = item.Link;
                let Title = item.Title;
            
                     
                return(
                    <>
                        <div className='cards' key={id}>
                            <div className='card' key={id}>
                                <img src={Image} alt="Movie Photos" />
                                <div className='cardInfo'>
                                    <span className='category'>{Category}</span>
                                    <h3 className='title'>{Title}</h3>
                                    <a href={Link} target='_blank'>
                                        <button type="button">Watch Now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    

                    </>
                )

        

            } 
    
        
        )}
            
        </>

    );

};

export default Card;