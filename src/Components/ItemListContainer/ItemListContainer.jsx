import React,{useState,useEffect} from "react";
import "./ItemListContainer.css";
import {getItems,getItemsByCategoty} from "../../Services/firestore";
import ItemList from "../Products/ItemList";
import {useParams} from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'


function ItemListContainer() {

const [data, setData] = useState([]);
const [isLoading,setIsLoading] = useState(true);
let { cat } = useParams();

useEffect(() => {
  setIsLoading(true)
  if (cat === undefined) {
     getItems()
     .then(
    (respuesta)=>{
      setData(respuesta)
       }
   )
   .finally(()=>setIsLoading(false))
  }
  else{
    getItemsByCategoty(cat).then(
    (respuesta)=>{
      setData(respuesta)
    }
     )
     .finally(()=>setIsLoading(false))
  }
  
}, [cat])


  return (
    <>
     {
      isLoading ? <div className="loader">
           <DotSpinner
       size={40}
       speed={0.9} 
       color="black" 
      />
      </div>
      : <ItemList data={data}/>
     }


      
    </>
  );
}

export default ItemListContainer;
