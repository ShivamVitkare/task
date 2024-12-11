import { createSlice } from "@reduxjs/toolkit";




const productSlice=createSlice({

name:"cart",
initialState:{
    items:[]
},
reducers:{
addTocart:(state,action)=>{
const existItem=state.items.find((item)=>item.id===action.payload.id)
if(existItem){
    existItem.quantity+=1
}else{
    state.items.push({...action.payload,quantity:1})
}

},
increase:(state,action)=>{
const item=state.items.find((item)=>item.id===action.payload.id)
if(item){
    item.quantity+=1
}
},
decrease:(state,action)=>{
    const item=state.items.find((item)=>item.id===action.payload.id)
    if(item && item.quantity >1){
        item.quantity-=1
    }
},
remove:(state,action)=>{
state.items=state.items.filter((item)=>item.id !== action.payload)

}


}
})

export const {addTocart,remove,increase,decrease} =productSlice.actions
export default productSlice.reducer