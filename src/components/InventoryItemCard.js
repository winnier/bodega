import React from 'react'

function InventoryItemCard({item, onClickReorder, onClickDelete }) {
    return(
        <div className="card" onClick={() => onClickReorder(item)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={() => onClickDelete(item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;