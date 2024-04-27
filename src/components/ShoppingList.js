import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setsearchTerm] = useState("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  } 

  function newItemAddition(newItems){
    setItems([...items, newItems])
  }
  
  function handleSearchChange(event){
    setsearchTerm(event.target.value);
  }

  // function filterBySearch(){
  //   console.log(searchTerm)
  // }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchTerm ==="") return true;

    return (item.category === selectedCategory || item.name.includes(searchTerm));
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={newItemAddition}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchTerm}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
