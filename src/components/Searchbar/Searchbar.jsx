import { useState } from 'react';
import { ImSearch } from 'react-icons/im'
import css from './Searchbar.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

function Searchbar({onSubmit}) {
  const [query, setQuery] = useState("")
  const handleChange = e => {
   setQuery({ query: e.target.value });
  };

  const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {  //щоб уникнути, що відправляється пошук пустоі строки, порівнюємо state до пустої строки, trim /треба щоб уникнути пропуски до введення і після і видаємо мессендж з помилкою
          return toast.error('🦄 Введи, будь ласка назву');      
     }
   onSubmit(query);
    setQuery({ query: '' }); }
  return (
     <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button} ><ImSearch></ImSearch></button>
      <input className={css.input} type="text" autoComplete="off"
            autoFocus
            placeholder="Search images and photos" value={query} onChange={handleChange}/>
        </form>
  )

}
  export default Searchbar;
