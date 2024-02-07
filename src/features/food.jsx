import React, { useState } from 'react';

const MenuItem = ({ item, count, addFood }) => {
    return <div className="menu_item">
       
        <img src={require(`../images/food${item.id}.jpg`)} alt={`Food item ${item.id}`} />

        <div>${item.price}.00 </div>
        <div >
            <button className="img_button" onClick={() => addFood(item.id, 1)}> + </button>
            <span className="quantity" >{count}</span>
            <button className="img_button" onClick={() => addFood(item.id, -1)}>-</button>
        </div>
    </div>
}
const menuItems = [
    { id: 1, name: "food1", price: 17 },
    { id: 2, name: "food2", price: 16 },
    { id: 3, name: "food3", price: 19 },
    { id: 4, name: "food4", price: 18 },
    { id: 5, name: "food5", price: 16 },
    { id: 6, name: "food6", price: 20 },
]
const sum = (a, b) => a + b;
export const Food = () => {
    const [order, setOrder] = useState({});

    const addFood = (id, count) => {
        let cnt = order[id]
        if (!cnt)
            cnt = 0
        cnt += count;
        const newOrder = { ...order, [id]: cnt >= 0 ? cnt : 0 }
        setOrder(newOrder);
    }

    const total = Object.keys(order).map(id => menuItems[id - 1].price * order[id]).reduce(sum, 0);

    return <section>
        <div className="food-info-container">
            <div className="menu">
                {
                    menuItems.map(item => {
                        let count = order[item.id];
                        if (!count)
                            count = 0
                        return <MenuItem key={item.id} item={item} count={count} addFood={addFood} />
                    })
                }
            </div>
            <div className="check-info">
                <div id="cart" className="cart">
                    Total: $<div id="totalPrice">{total}</div><br />
                </div>
               
            </div>
        </div>
    </section>
}