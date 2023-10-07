export async function AuthUser() {
  const urlAuthToken = `${import.meta.env.VITE_BACKEND_URL}/user/authtoken`;
  const jwtToken = localStorage.getItem("tjwt");

  if (!jwtToken) return false;

  try {
      const urlResponse = await fetch(urlAuthToken, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${jwtToken}`
        }
      })
      const response = await urlResponse.json();

      if (response.error) throw (error)
      
      return true;
  } catch (error) {
      return false;
  }
}
