export function AuthUser() {
  const jwtToken = localStorage.getItem("tjwt");

  if (!jwtToken) return false;
  
  return true;
}
