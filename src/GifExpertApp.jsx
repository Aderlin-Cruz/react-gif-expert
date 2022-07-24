import { useState, useEffect } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
  
  const onAddCategory = (newCategorie) => {
    if(categories.includes(newCategorie)) return;
    setCategories(prevCategory => [newCategorie, ...prevCategory])
  }
  return (
    <>
      <AddCategory
        onNewCategory = {onAddCategory}
      />
    <ol>
      {
        categories.map( categorie => (
        <GifGrid key={categorie} categorie={categorie}/>
        ))
      }
    </ol>
    </>
  )
}
