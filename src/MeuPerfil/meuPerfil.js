import './meuPerfil.css';
import React, {useState,useEffect} from 'react'
import Error from '../Error-page/Error';
import Axios from 'axios'

function Empresas() {
    


  return (
    <>
      <h4 className="menus">Empresas</h4>

      <div className="container">
      
    
      {empresasList.map(empresas=>
      (
          <div className="card" key={empresas.id}>
            <div className="card-body">
              <h5 className="card-title">{empresas.name}</h5>
              <h2 className="card-text">{empresas.CPF}</h2>
              <p className="card-text">{empresas.login}</p>
            </div>
          </div>
      )
      )}
    </div>
    </>
  );
}

export default Empresas;
