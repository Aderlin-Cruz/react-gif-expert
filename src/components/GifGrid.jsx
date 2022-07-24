import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.hook';

export const GifGrid = ({ categorie}) => {
 
 const { images, loading } = useFetchGifs(categorie);

  return (
    <div>
       <h3>{categorie}</h3>
       {
        loading && (
          <h2>...cargando</h2>
        ) 
       }
      <div className='card-grid'>
        {images?.map( (image) => (
         <GifItem 
          key={image?.id}
          {...image}
         />
        ))}
      </div>
    </div>
  )
}
