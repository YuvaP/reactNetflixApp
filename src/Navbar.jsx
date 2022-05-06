import React from 'react';

const Navbar = ({filterName, cardList})=>{

    return (
        <>
        <nav className='navbar'>
        <div className='btn-group'>  
            
            {cardList.map((curElem)=>{
                return (
                    <>
                        <button className='btn-group_item'
                            onClick={()=>filterName(curElem)}>{curElem}
                        </button>
                    </>
                )
            })}
          
         
         {/* <button className='btn-group_item' onClick={()=>setCardInfo(CardData)}>All</button>*/}
        </div>
      </nav>

      <div className="heading_style">Yuva's Favorite Netflix Shows by Categories</div>

      </>
    )
}

export default Navbar;