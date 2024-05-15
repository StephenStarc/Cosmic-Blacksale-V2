import React, { useEffect, useState } from 'react'
import Context from './Context'
import { fireDB, auth } from '../firebase/FIrebaseConnect'
import { getFirestore , collection, onSnapshot, Timestamp, addDoc} from 'firebase/firestore'
import { toast } from 'react-toastify'
import {addToCart, cartItems} from './CartState'

function ContextProvider(props) {
    
    const [product,setProduct] = useState({
      title:null,
      price:null,
      imageUrl: null,
      category: null,
      shortDescription: null,
      longDescription: null,
      time: Timestamp.now(),
      date: new Date().toLocaleDateString("en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    })
const [allProducts, setAllProducts] = useState([])

    function getProducts(){
      const productCollection = collection(fireDB, 'products')
      const productsArray = []
      onSnapshot(productCollection, (snap)=>{
       snap.forEach(doc => {
       productsArray.push({...doc.data(), id:doc.id})
      })
       setAllProducts(productsArray)
      })
    }

useEffect(()=>{
getProducts()
},[])

    async function addProduct(){
      if (product.title == null || product.price == null || product.imageUrl == null || product.category == null || product.shortDescription == null || product.longDescription == null) {
        return toast.error('Please fill all fields')
      }
      const productCollection = collection(fireDB, 'products')
      try{
       await addDoc(productCollection, product)
        toast(`🦄 Added Item Successfully 🚀 `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          
      }catch(err){
        return toast.error('Oops, Failed During Process')
      }
      setProduct('')
    }
  return (
    <Context.Provider value={{getProducts, product, setProduct, addProduct,allProducts,addToCart,cartItems}}>
       {props.children}
    </Context.Provider>
  )
}

export default ContextProvider