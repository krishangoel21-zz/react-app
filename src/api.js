//http://www.mocky.io/v2/5e8a00d6310000f29ad39f51


export const fetchData = async () => {
    try {
        const response = await fetch("http://www.mocky.io/v2/5e8a00d6310000f29ad39f51");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
