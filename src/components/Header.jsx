import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const store = useSelector((store)=>store)
  return (
    <header>
        <div>
     <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Wv_logo_proposal_flying_plane_contorted.png" alt="" />
     <h2>Uçuş Radarı</h2>
     </div>
    {
      store.isLoading ? 'Uçuşlar Hesaplanıyor' : 
      `${store.flights.length} Uçuş Bulundu`
    }
    </header>
  )
}

export default Header
