import {useState} from 'react';
import Axios from 'axios';
import InputMask from 'react-input-mask';
import './login.css';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  

  const [name, setName]         = useState("");
  const [cnpj, setCnpj]         = useState("");
  const [login, setLogin]       = useState("");
  const [password, setPassword] = useState("");      
  const [isActive, setIsActive] = useState(false);

  const submit = async () => {
    if(name === "" || cnpj.length < 18 || login === "" || password === ""){
      toast.error("Preencha os dados!", {
        style: {
          background: "black",
          color: "white",
          fontWeight: "bold",
        },
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        progressStyle: {
          background: "linear-gradient(to right, red, orange)",
          boxShadow: "0 0 10px black"
        }
      });

    }else{
      await Axios.post("http://localhost:3001/api/insert/users",{
        name: name,
        cnpj: cnpj,
        login: login,
        password: password
      }).then(response => {
        if(response.data === "success"){
          toast.success("Usuário cadastrado com sucesso!", {
            style: {
              background: "black",
              color: "white",
              fontWeight: "bold",
            },
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            progressStyle: {
              background: "linear-gradient(to right, #2cffe2, green)",
              boxShadow: "0 0 10px black"
            }
          });
          setTimeout(function(){
            window.location.href = "/";
          }, 3000);
        
        }
      }).catch(error => {
        toast.error("Erro ao Cadastrar!");
      });
    }
  }

  const enter = async () => {
    let res = await Axios.post("http://localhost:3001/api/log/users",{
    login: login,
    password: password
  })
  if(login === "" || password === ""){
    toast.error("Preencha os dados!", {
      style: {
        background: "black",
        color: "white",
        fontWeight: "bold",
      },
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      progressStyle: {
        background: "linear-gradient(to right, red, orange)",
        boxShadow: "0 0 10px black"
      }
    });

  }else if(res.data.length > 0){
    localStorage.setItem('user', JSON.stringify(res.data[0].name));
    localStorage.setItem('profile_picture', JSON.stringify(res.data[0].profile_picture));
    localStorage.setItem('login', JSON.stringify(res.data[0].login));
    localStorage.setItem('cnpj', JSON.stringify(res.data[0].CNPJ));
    localStorage.setItem('about', JSON.stringify(res.data[0].about));
    window.location.href = "/Empresas";
  }
  else{
    toast.error("UsuÃ¡rio ou senha incorretos!", {
      style: {
        background: "black",
        color: "white",
        fontWeight: "bold",
      },
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      progressStyle: {
        background: "linear-gradient(to right, red, orange)",
        boxShadow: "0 0 10px black"
      }
    });
  }

}

  const handleClicked = event => {
    setIsActive(false);
  };

  const handleClick = event => {
    setIsActive(true);
  };
  

  return (
    <>
    <header className="header-login"></header>
    <ToastContainer />
    <div className="login">
      <div className={isActive==true ? 'container-' + 'right-panel-active' : 'container' } id="container">
        <div className={isActive==true ? 'container-' + 'right-panel-active-sign-up-container'  : 'form-container sign-up-container' } >
          <form className="login-form"action="#">
            <h1 className="h1">Crie uma Conta</h1>
            <div className="social-container">
              <a href="#" className="social"><img className="img"src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-128.png"/></a>
              <a href="#" className="social"><img className="img2"src="https://cdn4.iconfinder.com/data/icons/picons-social/57/40-google-plus-2-128.png"/></a>
              <a href="#" className="social"><img className="img3"src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-128.png"/></a>
            </div>
            <span>ou use seu email para entrar</span>
            <input  onChange={(e) => {setName(e.target.value)}} className="login-input" type="text" placeholder="Name" autoComplete="off" />
            <InputMask  onChange={(e) => {setCnpj(e.target.value)}} className="login-input" type="cnpj" placeholder="CNPJ" mask="99.999.999/9999-99" maskchar={null}  maskPlaceholder={null} autoComplete="off" />
            <input  onChange={(e) => {setLogin(e.target.value)}} className="login-input" type="email" placeholder="Email" autoComplete="off" />
            <input  onChange={(e) => {setPassword(e.target.value)}} className="login-input" type="password" placeholder="Password" autoComplete="off" />
            <button onClick={submit} className="button" >Cadastre-se</button>
          </form>
        </div>
        <div className={isActive==true ? 'container-' + 'right-panel-active-sign-in-container' : 'form-container sign-in-container' } >
          <form className="login-form" action="#">
            <h1 className="h1">Log-in</h1>
            <div className="social-container">
              <a href="#" className="social"><img className="img"src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-128.png"/></a>
              <a href="#" className="social"><img className="img2"src="https://cdn4.iconfinder.com/data/icons/picons-social/57/40-google-plus-2-128.png"/></a>
              <a href="#" className="social"><img className="img3"src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-128.png"/></a>
            </div>
            <span>ou use sua conta</span>
            <input onChange={(e) => {setLogin(e.target.value)}} className="login-input" type="email" placeholder="Email" />
            <input onChange={(e) => {setPassword(e.target.value)}} className="login-input" type="password" placeholder="Password" />
            <a className="a-login" href="#">Esqueceu sua senha?</a>
            <button onClick={enter} className="button"  >Entrar</button>
          </form>
        </div>
        <div className={isActive==true ? 'container-' + 'right-panel-active-overlay-container'  : 'overlay-container' }>
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1-ghost">Bem vindo de volta!</h1>
              <p className="p">Para continuar conectado conosco por favor preencha os dados</p>
              <button className="ghost" id="signIn" onClick={handleClicked} >Entrar</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1-ghost">Olá, Amigo!</h1>
              <p className="p">Entre com seus dados e comece sua jornada conosco</p>
              <button className="ghost" id="signUp" onClick={handleClick}>Cadastre-se</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer-login">
    </footer>

    </>
  );
}

export default Login;
