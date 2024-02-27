import { useState } from "react";


function SearchId(id) {
   //console.log(onSearch);
 
   const search = () => {
      onSearch(id)
      setId('')
   }   
   return (
      <div>
         <input type='search' onChange={handleChange} 
         placeholder="Ingresa ID" value={id}/>
         <button onClick={search}>Agregar </button> 
      </div>
   );
}
export default SearchId