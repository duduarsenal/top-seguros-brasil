export const GetPriceSelector = async () => {

    const urlAPI = `${import.meta.env.VITE_BACKEND_URL}/insurances`;

    try {
        const urlResponse = await fetch(urlAPI);
        const response = await urlResponse.json();
        return await response;
    } catch (error) {
        throw new Error(error)
    }
    
}