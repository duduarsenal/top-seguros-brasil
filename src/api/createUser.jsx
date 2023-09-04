export async function CreateUser(name, username, email, password){
    const urlCreate = `${import.meta.env.VITE_BACKEND_URL}/users/register`

    try {
        const urlResponse = await fetch(urlCreate, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({name, username, email, password})
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