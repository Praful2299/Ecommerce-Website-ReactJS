import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: "cart",
    initialState: {
        cards :[],
    },
    reducers : {
        addToCart : (state,action)=>{
            let flag=false;
            for(let i=0;i<state.cards.length;i++){
                if(state.cards[i].id===action.payload.id){
                    flag=true;
                }
            }
            if(!flag) state.cards.push(action.payload);
            else alert("Product already exists")
        },
        
        removeItem :(state,action)=>{
            state.cards= state.cards.filter(item=>item.id!=action.payload)
        },

        incProduct:(state,action)=>{
            for(let i=0;i<state.cards.length;i++)
                {
                    if(state.cards[i].id==action.payload){
                        state.cards[i].qty++;
                    }
                }
        },

        decProduct:(state,action)=>{
            for(let i=0;i<state.cards.length;i++)
                {
                    
                    if(state.cards[i].id==action.payload){
                        if(state.cards[i].qty>1){
                            state.cards[i].qty--;
                        }
                        
                    }
                
                }
        }
    }
})
export const {addToCart , removeItem , incProduct ,decProduct} = cartSlice.actions;
export default cartSlice.reducer;