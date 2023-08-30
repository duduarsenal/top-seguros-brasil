import { useCallback } from "react";

export default function ErrorPopup(props){
    const { state, message } = props.error;

    const emailInput = useCallback((inputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
      }, [state]);

    return ( 
        <section className={`${state ? 'initial' : 'hidden'} fixed flex items-center justify-center z-10 bg-[#11111160] w-screen h-screen`}>
            <div className="relative w-max min-w-[25rem] h-[10rem] bg-[white] rounded-lg p-4 flex flex-col items-center justify-start pt-8">
                <input 
                className="opacity-0 absolute top-0 w-full h-full bg-red-500"
                // tabIndex={0}
                // autoFocus={true}
                ref={emailInput}
                onBlur={() => props.setError({state: false, message: ""})}
                />
                <p className="text-[black] text-[1.25rem] font-semibold">{message}</p>
                <p className="text-[black] text-[1.15rem]">Tente novamente mais tarde..</p>
                <button className='absolute bottom-0 m-4 bg-light-green-opacity px-4 py-1 rounded-md font-[500] text-[1.1rem] hover:bg-light-green' onClick={() => props.setError({state: false})}>Fechar</button>
            </div>
        </section>
     );
}
