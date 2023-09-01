export async function AuthLogin(username, password){
    const urlAuth = `${import.meta.env.VITE_BACKEND_URL}/users/auth`;

    try {
        const urlResponse = await fetch(urlAuth, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({username: username, password: password})
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