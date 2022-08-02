import './contato.css';
import Error from '../Error-page/Error';

function Contato() {
  return (
    <>
      <h4 className="menus">Contato</h4>
      <div className="contato">
        <h2>Teve algum problema com o sistema?</h2>
        <h3>Entre em contato com o suporte:</h3>
        <a href="https://github.com/DanielleTetzner" target="_blank" className="link-contato">Danielletetzner0.gmail.com</a>
        <img src="./ninja-kabum.png" alt="" className="img-ninja"></img>
      </div>
    </>
  );
}

export default Contato;
