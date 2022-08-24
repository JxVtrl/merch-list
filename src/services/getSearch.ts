export const getSearch = async (text: string) => {
    const key = import.meta.env.VITE_GOOGLE_KEY
    const cx = import.meta.env.VITE_SEARCH_ENGINE

    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${text}&searchType=image`)
        const json = await response.json();
        return json.items;
    } catch (err) {
        console.log('Erro: ' + err);
    }
}