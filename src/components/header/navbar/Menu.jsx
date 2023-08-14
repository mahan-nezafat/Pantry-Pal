import React from 'react';
import Item from './Item';

const Menu = () => {

    const items = ['Taste','Recommended','Types','Equipments'];

    return ( 
    <>
       <div className="menu">
            <ul>
                {
                    items.map(item => {
                        return <Item itemName={item} />
                    })
                }
            </ul>
       </div>
    </>
    );
}
 
export default Menu;