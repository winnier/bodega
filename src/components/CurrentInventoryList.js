import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventoryItems, onClickReorder, deleteFromInventory}) {
    const itemCards = inventoryItems.map((item) => {
        return <InventoryItemCard key={item.id} item={item} onClickReorder={onClickReorder} onClickDelete={deleteFromInventory}/>
    })


    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {itemCards}
            </div>
        </div>
    );
}

export default CurrentInventoryList;