import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({reorderItems, onClickDelete}) {
    const reorderItemCards = reorderItems.map((item) => {
        return <InventoryItemCard key={item.id} item={item} onClickDelete={onClickDelete} />
    })


    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderItemCards}
            </div>
        </div>
    );
}

export default ReorderInventoryList;