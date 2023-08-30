export const GetPriceSelector = async () => {

    const urlAPI = "http://localhost:3030/insurances"

    try {
        const urlResponse = await fetch(urlAPI);
        const response = await urlResponse.json();
        return await response;
    } catch (error) {
        throw new Error(error)
    }
    
}