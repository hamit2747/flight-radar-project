import { useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';
import { useState } from "react";

const ListView = ({openDetail}) => {
  const store = useSelector((store)=> store)

  const [itemOffset, setItemOffset] = useState(0);

  

//! Sayfalama değerleri
//sayfa başına eleman 
const itemsPerPage = 10
//gösterilecek son itemi tespit eder
const endOffset = itemOffset + itemsPerPage;
//belirli aralıktaki aralığı diziden alıyor
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  //toplam kaç sayfa olduğunu hesaplar
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

//sayfalara tıklanınca çalışır
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;
   setItemOffset(newOffset);
  };

  
  return (
    <div className="list-page">
     <table className="table table-striped table-dark table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Kuyruk Kodu</th>
          <th>Enlem</th>
          <th>Boylam</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {currentItems && currentItems.map((fly)=>(
          <tr>
            <td>{fly.id}</td>
            <td>{fly.code}</td>
            <td>{fly.lat}</td>
            <td>{fly.lan}</td>
            <td><button onClick={()=>openDetail(fly.id)}>Detay</button></td>
          </tr>
        )
        
        )}
      </tbody>
     </table>
     <ReactPaginate
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2} //ortada gösterilecek sayı
        pageCount={pageCount}
        previousLabel="< Geri"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  )
}

export default ListView
