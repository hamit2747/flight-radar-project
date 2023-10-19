import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constant";
import axios from "axios";

export const getFlights = createAsyncThunk(
  'flights/getFlights',
  async () => {
    // api'a istek atma
    const res = await axios.request(options);
    //bize gelen dizileri objeye çevirme
    const newData = res.data.aircraft.map((flight) => ({
      id:flight[0],
      code:flight[1],
      lat:flight[2],
      lan:flight[3],
    })) 

    //verileri slice'a aktarma
    return newData
   
  }
)