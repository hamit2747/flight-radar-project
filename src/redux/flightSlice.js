import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
 //güncel verisyon extra reducer tutma
  extraReducers: (builder)=>{
  builder
  //cevap beklerken 
  .addCase(getFlights.pending,(state)=>{
    state.isLoading = true;
  })
  //olumlu cevap geldiğinde
  .addCase(getFlights.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.isError=false
    state.flights=action.payload

  })
  //olumsuz cevap geldiğinde
  .addCase(getFlights.rejected,(state)=>{
    state.isLoading = false;
    state.isError = 'Uçuş verilerini alırken bir hata oluştu';

  })


  
  },
});

 export default flightSlice.reducer;

 //extraReducer eski versiyonu
/* //cevap beklerken
[getFlights.pending]:(state)=>{
  state.isLoading=false;
},

//olumlu cevap geldiğinde
[getFlights.fulfilled]:(state,action)=>{
state.isLoading=false;
state.isError=false
state.flights=action.payload

},

//olumsuz cevap geldiğinde
[getFlights.rejected]:(state)=>{
state.isLoading = false;
state.isError = 'Uçuş verilerini alırken bir hata oluştu';
} */ 