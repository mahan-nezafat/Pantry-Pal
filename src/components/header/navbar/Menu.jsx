import React from 'react';
import Item from './Item';

const Menu = () => {

    const items = ['Tastes','Recommended','Types','Equipments'];

    return ( 
    <>
       <div className="menu">
            <ul>
                {
                    items.map((item, index) => {
                        return <Item itemName={item} key={index} />
                    })
                }
            </ul>
       </div>
    </>
    );
}
 
export default Menu;