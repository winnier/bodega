import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventoryItems, setInventoryItems] = useState([])
    const [reorderItems, setReorderItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
        .then(response => response.json())
        .then(items => {
            setInventoryItems(items)
        })
    }, [])

    function handleAddReorderItem(newItem) {
        if (reorderItems.indexOf(newItem) === -1) {
            setReorderItems([...reorderItems, newItem]) 
        }
    } 

    function handleDeleteReorderItem(deleteItem) {
        const newReorderList = reorderItems.filter(reorderItem => reorderItem.id !== deleteItem.id)
        setReorderItems(newReorderList)
    } 

    function deleteFromInventory(deleteItem) {
        fetch(`http://localhost:8001/inventory/${deleteItem.id}`, { method: 'DELETE' })
        const deletedInventory = inventoryItems.filter(inventoryItem => inventoryItem.id !== deleteItem.id)
        setInventoryItems(deletedInventory)
        handleDeleteReorderItem(deleteItem)
    }

    return(
        <div className="container">
            <CurrentInventoryList inventoryItems={inventoryItems} onClickReorder={handleAddReorderItem} deleteFromInventory={deleteFromInventory} />
            <ReorderInventoryList reorderItems={reorderItems} onClickDelete={handleDeleteReorderItem} />
        </div>
    );
}

export default InventoryManager;