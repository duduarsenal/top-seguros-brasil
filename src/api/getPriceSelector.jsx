export const GetPriceSelector = async () => {

    const urlAPI = `${import.meta.env.VITE_BACKEND_URL}/insurances`;

    try {
        const urlResponse = await fetch(urlAPI);
        const response = urlResponse.json();
        return response;
    } catch (error) {
        throw new Error(error)
    }
    
}