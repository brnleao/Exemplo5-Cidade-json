import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyle } from "../css/LoginStyle";
import img from '../assets/loginimg.jpg'

const Login=()=>{

    // Hook - useRef pega a referencia do componente ou elemento e guarda
    const usuario = useRef();
    const senha = useRef();

    // Hook - useState - Manipula o estado da variavel
    const [usuarios, setUsuarios] = useState([]);

    // Hook - useNavigate - Redireciona para um componente
    const navigate = useNavigate();

    // Criando a função de validação
    function validade(){
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].usuario == usuario.current.value && usuarios[i].senha == senha.current.value){
                return true;
            }
        }
    }

    // Criando a função handleSubmit
    const handleSubmit=(e)=>{
        // previne que sua página faça qualquer modificação ex. load
        e.preventDefault();

        if(validade()){

        let token = Math.random().toString(16).substring(2)+
        Math.random().toString(16).substring(2);
        sessionStorage.setItem("usuario", usuario.current.value);
        sessionStorage.setItem("senha", token);
        navigate("/dashboard");

        }else{
            alert("Usuario/senha inválidos!");
        }
    }

    // Hook - useEffet - realiza o efeito colateral na pagina que vai exeutar o login
    useEffect(()=>{
        // vai na API e tras os dados via url
        fetch("http://localhost:5000/usuarios/")
        // promise
        .then((res)=>{
            return res.json();
        })
        // recebe as alterações
        .then((res)=>{
            setUsuarios(res)
        })
        //retorna um array vazio
    },[])

    return (
        <LoginStyle>
            <section className="container">
                <div className="container-login">
                    <div className="login">

                        <form className="login-form" onSubmit={handleSubmit}>
                            <span className="titulo-login">Faça seu Login</span>

                            <div className="w-input">
                                <input type="text" className="input-form" id="usuario" ref={usuario}/>                      
                            </div>


                            <div className="w-input">
                                <input type="password" className="input-form" id="senha" ref={senha} />                      
                            </div>

                            <div className="login-btn">
                                <button type="submit" className="login-form-btn">Login</button>
                            </div>

                            <ul className="utilidades">
                                <li>
                                    <span className="text1">Esqueceu sua senha?</span>
                                </li>
                                <li>
                                    <span className="text1">Não possui conta?</span>
                                    <a href="#">
                                        Criar
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <img src={img} alt="logo imagem"/>
                </div>
            </section>
        </LoginStyle>
    )
}
export default Login