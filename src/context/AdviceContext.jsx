import { useState, useEffect, createContext } from "react";
export const AdviceContext = createContext();

export function AdviceContextProvider(props) {
   const [advices, setAdvices] = useState([]);

   async function newAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvices(data);
   }

   useEffect(() => {
      newAdvice();
   }, []);


   return (
      <>
         <AdviceContext.Provider value={{ advices, newAdvice }}>
            {props.children}
         </AdviceContext.Provider>
      </>
   );
}

export default AdviceContext;
