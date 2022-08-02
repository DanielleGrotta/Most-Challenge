import './empresas.css';
import React, {useState,useEffect} from 'react'
import Error from '../Error-page/Error';
import Axios from 'axios'
import Pagination from '../Components/pagination/Pagination';


function Empresas() {
    
  const [empresasList, setEmpresas] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await Axios.get(`http://localhost:3001/api/get/users?offset=${offset}`).then((response)=>{ 
        setEmpresas(response.data)
      });
    }
    fetchData();
  },[]);


  return (
    <>
      <h4 className="menus">Empresas</h4>

      <div className="containerEmpresas">
        
      {empresasList.map((empresas) => (
          <a href="" className="card" key={empresas.id}>  
          <img alt="" src={empresas.profile_picture} className="card-img"/>
            <div className="card-title">
              <h5 className="card-title">{empresas.name}</h5>
              <p className="card-email">{empresas.login}</p>
            </div>
            <div className="card-body">
              <h2 className="card-cnpj">{empresas.CNPJ}</h2>
              <p className="card-text">{empresas.about}</p>
            </div>
          </a>
        ))}
        <Pagination offset={offset} setOffset={setOffset}/>
        
    </div>
    </>
  );
  
}

export default Empresas;
