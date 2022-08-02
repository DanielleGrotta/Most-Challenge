import './sobre.css';
import React, {  useState } from 'react';
import Modal from "../Components/registerModal/Modal";
import InputMask from 'react-input-mask';
import Axios from "axios";

function Sobre() {

  let pic   = localStorage.getItem("profile_picture");
  let name  = localStorage.getItem("user");
  let about = localStorage.getItem("about");
  let login = localStorage.getItem("login");
  let cnpj  = localStorage.getItem("cnpj");

  if(pic === null){
    pic = "";
  }
  if(about === null){
    about = "Escreva um breve resumo sobre sua empresa...";
  }
  var picClear   = pic.replace(/\"/g, "");
  var nameClear  = name.replace(/\"/g, "");
  var aboutClear = about.replace(/\"/g, "");
  var loginClear = login.replace(/\"/g, "");
  var cnpjClear  = cnpj.replace(/\"/g, "");


  const [name_client, setName] = useState("");
  const [cpf, setCpf]          = useState("");
  const [email, setEmail]      = useState("");
  const [rg, setRg]            = useState("");
  const [tel1, setTel1]        = useState("");
  const [tel2, setTel2]        = useState("");
  const [birth, setBirth]      = useState("");


  const [modal, setModal]      = useState(false);
  


  const submit = () => {
    Axios.post("http://localhost:3001/api/insert",{
      name: name_client,
      cpf: cpf,
      rg: rg,
      email: email,
      tel1: tel1,
      tel2: tel2,
      birth: birth,
      active: '1',
      id_user: '14'
    }).then(() => {
      alert("Success!");
    }
    ).catch(error => {
      console.log(error);
    });
  }



  return (
    <>
      <h4 className="menus">Sobre </h4>
      <div className="all-about">
        <div className="sobre-user">
          <div className="foto">
            <img src={picClear} alt="" className="img-user-about" />
            <h1>{nameClear}</h1>
          </div>
        </div>
        <div className="meio-sobre">
          <div className="sobre">
            <h1>CNPJ</h1>
            <p>
              {cnpjClear}
            </p>
          </div>
          <div className="sobre3">
            <h1>Email</h1>
            <p>
              {loginClear}
            </p>
          </div>
        </div>
        <div className="tudoSobre">
          <button onClick={() => setModal(true)} className="sobre1">
            <h1>Editar</h1>
              <img className="btn-img-edit-user"src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/09_pencil-128.png"/>
          </button>
          <div className="sobre4">
            <h1>Sobre</h1>
            <p>
              {aboutClear}
            </p>
          </div>
        </div>
      </div>
      <div className="modal">
        {modal ? (
          <Modal type="Cadastrar" onClose={() => setModal(false)}>

            <form id="addform" > 
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="recipient-name" className="nome-input">Nome:</label>
                <div className="input-group mb-3">
                  <input onChange={(e) => {setName(e.target.value)}} type="text" className="input" id="name_register" name="name" required="required" placeholder="Please enter client's name" autoComplete="off" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="nome-input">RG:</label>
                <div className="input-group mb-3">
                  <InputMask onChange={(e) => {setRg(e.target.value)}} type="text" className="input" id="rg_register" name="rg" required="required" maskChar={null}  maskPlaceholder={null} placeholder="00.000.000-0" mask="99.999.999-*"  autoComplete="off"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="nome-input">CPF:</label>
                <div className="input-group mb-3">
                  <InputMask onChange={(e) => {setCpf(e.target.value)}} type="text" className="input" id="cpf_register" name="cpf" required="required" maskChar={null}  maskPlaceholder={null} placeholder="000.000.000-00" mask="999.999.999-99" autoComplete="off" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="nome-input">Email:</label>
                <div className="input-group mb-3">
                  <input onChange={(e) => {setEmail(e.target.value)}} type="text" mask="9 999 999 99"className="input" id="email_register" name="email" required="required" placeholder="example@gmail.com"   autoComplete="off" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="nome-input">Celular:</label>
                <div className="input-group mb-3">
                  <InputMask onChange={(e) => {setTel1(e.target.value)}} type="text" className="input" id="tel1_register" name="tel1" required="required" maskChar={null}  maskPlaceholder={null} placeholder="(00) 0000-0000" mask="(99) 9999-9999" autoComplete="off" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="nome-input">Telefone:</label>
                <div className="input-group mb-3">
                  <InputMask onChange={(e) => {setTel2(e.target.value)}} type="text" className="input" id="tel2_register" name="tel2" required="required" maskChar={null}  maskPlaceholder={null} placeholder="(00) 0000-0000" mask="(99) 9999-9999" autoComplete="off" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="nome-input">Idade:</label>
                <div className="input-group mb-3">
                  <input onChange={(e) => {setBirth(e.target.value)}} type="date" className="input" id="birth_register" name="birth" required="required" />
                </div>
              </div>
              <hr/>
              <div className="modal-footer">
                <button onClick={submit} type="submit"  className="confirmar" id="cadBtn" placeholder="Confirmar"><img className="confirmar" alt=""src="https://cdn0.iconfinder.com/data/icons/mintab-outline-for-ios-4/30/confirm-check-right-correct-128.png" /></button>
              </div>
            </div>
            </form>
            
          </Modal>
        ): null}
      </div>
    </>
  );
}

export default Sobre;
