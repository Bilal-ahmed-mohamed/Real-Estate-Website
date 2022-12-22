import  { useState , useEffect } from 'react'
import axios from 'axios';
import {usePropertyContext} from '../hooks/usePropertyContext';

const UseFetch = (dataUrl) => {
  
  const {dispatch}  = usePropertyContext();
  const [data , setData] = useState([])
  const [isLoading , setLoading] = useState(false)
  const [error , setError ] = useState(null)


  useEffect(() => {
      let isMounted = true;
      const source = axios.CancelToken.source();


      const fetchData = async (URL) => {
       setLoading(true)
       
       try{
        const res = await axios.get(URL , {  
          cancelToken : source.token
        })
        if(isMounted){
        //  setData(res.data)
         dispatch({type:'SET_WORKOUTS' , payload:res})
         
         setError(null)
        }
       } catch(error){
        if (isMounted) {
          setError(error.message)
          setData([])
        }
       }finally{
        isMounted && setLoading(false)
       }

      } 

      fetchData(dataUrl);
      const cleanUp = () => {
        isMounted = false;
        source.cancel();
      }


     

      return cleanUp;
  },[dataUrl,dispatch])
   
  return {data , isLoading , error}
}

export default UseFetch