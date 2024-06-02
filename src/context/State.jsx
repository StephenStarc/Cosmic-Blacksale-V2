import React, { useEffect, useState } from 'react'
import Context from './Context'
import { fireDB, auth } from '../firebase/FirebaseConnect'
import { getFirestore , collection, onSnapshot, Timestamp, addDoc} from 'firebase/firestore'
import { toast } from 'react-toastify'


function ContextProvider(props) {
  
  const [Cart,setCart] = useState([])

  useEffect(()=>{
    const cartItems = localStorage.getItem('cosmicBlacksaleCart') ? JSON.parse(localStorage.getItem('cosmicBlacksaleCart')) : {products:[]}
    setCart(cartItems)
  },[])

  function addDecimal(value){
    return (Math.round(value * 100)/100).toFixed(2)
}

function addToCart(item) {
    const excitingItem = Cart.products.find((i) => i.id === item.id)
    if(excitingItem){
        return toast.error('Oops,This Product is already In your cart')
    }else{
      Cart.products.push(item)
    }
    
    const totalPrice = addDecimal(Cart.products.reduce((acc,item) => acc + Number(item.price), 0))
    setCart({...Cart, totalPrice : totalPrice})
}

function removeFromCart(id){
  
const removeProduct = Cart.products.filter((i) => i.id !== id)

Cart.products = removeProduct
const totalPrice = addDecimal(Cart.products.reduce((acc,item) => acc + Number(item.price), 0))
    setCart({...Cart, totalPrice : totalPrice, products:removeProduct})

}

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
    <Context.Provider value={{getProducts, product, setProduct, addProduct,allProducts,addToCart,removeFromCart,Cart}}>
       {props.children}
    </Context.Provider>
  )
}

export default ContextProvider