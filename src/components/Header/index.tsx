import { HeaderContainer } from "./styles"
import logosrc from '../../assets/Logo.svg'
import { useNavigate } from "react-router-dom";

export function Header(){
    
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
    console.log(navigate)
  }

  return (
    <HeaderContainer>
        <button onClick={voltar}>Home</button>
        <img src={logosrc} alt="" />
    </HeaderContainer>
    )
}