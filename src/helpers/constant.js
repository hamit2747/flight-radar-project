export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.812898',
      bl_lng: '27.59446',
      tr_lat: '41.582989',
      tr_lng: '44.816771',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '53e1016324mshd0f8573932d0a24p1b4d7cjsn652d647d640a',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };


  export const detailOpt ={
    headers: {
      'X-RapidAPI-Key': '53e1016324mshd0f8573932d0a24p1b4d7cjsn652d647d640a',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };