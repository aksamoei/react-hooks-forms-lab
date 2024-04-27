import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function addingInput(event){
    setItemName(event.target.value)
  }
  function addingCategory(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItems = {
      id:uuid(),
      name: itemName,
      category: itemCategory
    }
    //console(itemName)
    //console.log(itemCategory)
    setItemName("")
    setItemCategory("Produce")
    onItemFormSubmit(newItems)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={addingInput} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={addingCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
