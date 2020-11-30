export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ib5xB1VRK8NHC6Z8yctmr6BWrhCDIUjI`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id:  img.id,
            title: img.title,
            image: img.images.downsized_medium.url
        }
    });
    return gifs;
}