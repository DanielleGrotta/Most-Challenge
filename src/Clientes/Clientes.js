import './clientes.css';
import React, { useEffect, useState } from 'react';
import Error from '../Error-page/Error';
import Axios from "axios";
import api from "../services/api";
import Modal from "../Components/registerModal/Modal";
import InputMask from 'react-input-mask';
import Pagination from '../Components/pagination/Pagination';
const moment = require('moment');


function Clientes() {

  const [name_client, setName] = useState("");
  const [cpf, setCpf]          = useState("");
  const [email, setEmail]      = useState("");
  const [rg, setRg]            = useState("");
  const [tel1, setTel1]        = useState("");
  const [tel2, setTel2]        = useState("");
  const [birth, setBirth]      = useState("");

  const [modal, setModal]      = useState(false);
  const [clientesList, setClientes] = useState([]);


  useEffect(() => {
  Axios.get('http://localhost:3001/api/get/clients').then((response)=>{ 
    setClientes(response.data)
    console.log(response)
  
  });
  }, []);


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
      <h4 className="menus">Clientes</h4>
        <div className="add-btn-modal">
          <button  className="open-modal" onClick={() => setModal(true)}>Adicionar Cliente</button>
        </div>
      
      <div className="clientes-list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Telefone</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>

        {clientesList.map(clientes=>
      
      (
        <tr key={clientes.id} className="tr-c">
          <td>{clientes.name_client}</td>
          <td>{clientes.cpf}</td>
          <td>{clientes.rg}</td>
          <td>{clientes.email}</td>
          <td>{clientes.tel1}</td>
          <td>{clientes.tel2}</td>
          <td>{moment(clientes.birth).format('L')}</td>
          <td className="btns">
            <button className="edit-btn" onClick={() => setModal(true)}>Editar</button>
            <button className="delete-btn">Excluir</button>
          </td>
        </tr>

      )
      )}
          </tbody>
        </table>
      </div>

      <Pagination/>

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

export default Clientes;
