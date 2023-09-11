export async function getProfile(){
    const urlAuth = `${import.meta.env.VITE_BACKEND_URL}/user/getone`;
    const jwtToken = localStorage.getItem("tjwt");

    try {
        const urlResponse = await fetch(urlAuth, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${jwtToken}`
            }
        })
        const response = await urlResponse.json();

        if (response.error){
            throw (response);
        }

        return response;
    } catch (error) {
        throw (error)
    }

}