import React from 'react'
import './error.css'

export default function Error() {
  return (
    <>
      <div>
        <img src="./error-page.png" alt="" className="error" />
        <p className="mensagem-error">Erro 404 <br />Pagina não encontrada :( <br /> Acesse a <a href="/" className="mensagem-error-link">Home</a> para continuar</p>
      </div>
    </>
    
  )
};
