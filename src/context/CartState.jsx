import { useContext } from "react"
import { toast } from "react-toastify"

const cartItems = localStorage.getItem('cosmicBlacksaleCart') ? JSON.parse(localStorage.getItem('cosmicBlacksaleCart')) : {products:[]}

function addDecimal(value){
    return (Math.round(value * 100)/100).toFixed(2)
}

function CartUpdate(){
    cartItems.totalPrice = addDecimal(cartItems.products.reduce((acc,item) => acc + Number(item.price), 0))

    localStorage.setItem('cosmicBlacksaleCart', JSON.stringify(cartItems))
 
    return cartItems
}

function addToCart(item) {

    const excitingItem = cartItems.products.find((i) => i.id === item.id)
    if(excitingItem){
        return toast.error('Oops,This Product is already In your cart')
    }else{
        cartItems.products.push(item)
    }

    //Calculating the Total Price
    CartUpdate()
}

function removeFromCart(id){

const removeProduct = cartItems.products.filter((i) => i.id !== id)

cartItems.products = removeProduct
//Calculating the Total Price
cartItems.totalPrice = addDecimal(cartItems.products.reduce((acc,item) => acc + Number(item.price), 0))

    localStorage.setItem('cosmicBlacksaleCart', JSON.stringify(cartItems))
 
    return cartItems
}

export {addToCart, cartItems, removeFromCart}