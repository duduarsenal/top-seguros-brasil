import { Navigate } from "react-router-dom";

export function PrivateRoute({children, AuthUser}){

    const user = AuthUser();

    user.then((user) => {
            if (!user){
                return ( 
                    <>
                        {console.log("Unauthorized")}
                        <Navigate to="/login"/> 
                    </>
                )
            }
    })

    return children;
}