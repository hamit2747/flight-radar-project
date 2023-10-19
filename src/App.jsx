import { useEffect, useState } from "react"
import ListView from "./pages/ListView"
import MapView from "./pages/MapView"
import Header from "./components/Header"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions"
import Sidebar from "./components/Sidebar"




function App() {
  const [showMapView,setShowMapView] = useState(true)
  const [showDetail,setShowDetail] = useState(false)
  const [detailId,setDetailId] = useState(null)

  const dispatch = useDispatch()

  //uçuşları getirir
useEffect(()=>{
 dispatch(getFlights());
},[])

//haritayı açar ve detaylarını göstereceğimiz uçağın id 'sini alır

const openDetail = (id) => {
//detaylarını göstereceğimiz uçağın id 'sini alır
setDetailId(id)
//haritayı açar 
setShowDetail(true)
}


  return (
    <>
    <Header/>
    {/* yan detay */}
    {showDetail && <Sidebar setShowDetail = {setShowDetail} detailId ={detailId}/> }
    
    <div className="view-buttons">
      <button 
      className={showMapView ?  'active' : ''}
      onClick={()=>setShowMapView(true)}>Harita Görünümü</button>
      <button 
      className={!showMapView ? 'active' :''}
      onClick={()=>setShowMapView(false)}>Liste Görünümü</button>
    </div> 
   
    {/* Hangi bileşenin ekrana basılacağına karar verme  */} 
    {showMapView ? <MapView 
    setShowDetail={setShowDetail}
    openDetail={openDetail}
    /> 
    : <ListView 
    openDetail={openDetail}
    setShowDetail={setShowDetail} /> }
    
    </>
  )
}

export default App
