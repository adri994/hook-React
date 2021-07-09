import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

  const [state, setstate] = useState({data:null, loading: true, error:null})
  const isMounted = useRef(true)

  useEffect(() => {

    // Esto lo estamos haciendo para cuando el componente desaparezca cambia el valor
    // Recordemos que el return del useEffect se efecuta cuando desaparece un elemento
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect( async() => {
    setstate({data:null, loading: true, error:null})



    
    // const URL = await fetch(url)
    // const data = await URL.json()

    // setTimeout(() => {
    //   setstate({
    //     loading:false,
    //     error:null,
    //     data
    //   })
    // }, 4000);

    fetch(url)
      .then(resp=> resp.json())
      .then(data=>{
        setTimeout(() => {
          if (isMounted.current){
            setstate({
              loading:false,
              error:null,
              data
          }) 
          }else{
            console.log('no monto')
          }
        }, 4000);
      })
  }, [url])
  return state
}
