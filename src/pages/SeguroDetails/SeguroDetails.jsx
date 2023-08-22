import { useParams } from "react-router-dom";

export default function SeguroDetails() {

    const { id } = useParams();

    return ( 
        <>
            Esse é o seguro {id}
        </>
     );
}