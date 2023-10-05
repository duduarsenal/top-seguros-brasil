export async function cRegister(userInfos){
    const urlComplete = `${import.meta.env.VITE_BACKEND_URL}/user/cregister`
    const jwtToken = localStorage.getItem("tjwt");

    try {
        const urlResponse = await fetch(urlComplete, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({...userInfos})
        })

        const response = await urlResponse.json();

        if (response.error){
            throw (response);
        }
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}