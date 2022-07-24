export const getGifts = async (categorie) => {
  const url =`https://api.giphy.com/v1/gifs/search?api_key=40LtS00Hz3ozvuwPrE2eujehf6Buwsh7&q=${categorie}&limit=10`
  const resp = await fetch(url);
  const{ data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
  return gifs;
}