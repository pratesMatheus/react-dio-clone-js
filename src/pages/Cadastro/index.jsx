import { MdEmail, MdLock } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/input';
import {Container, Column, Row, Wrapper, Title, TitleLogin, SubTitleLogin, CriarText} from './styles';

//react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// import api from axios package
import { api } from '../../services/api';

const schema = yup.object({
  email: yup.string().email("Email não é válido").required("Campo obrigatório"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
  name: yup.string().name("Insira seu nome").required("Campo obrigatório"),
}).required();


const Cadastro = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onChange',
    }
  );
  
  //console.log(isValid, errors);

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);

      if(data.length === 1) {
        navigate('/feed');
      } else {
        alert("Email ou senha inválidos");
      }
      
      //console.log("Retorno da API", data)
    } catch (error) {
      alert('Houve um erro:\n' + error + "\nTente novamente")
    }
  };
/* 
  const handleClickSignUp = () => {
    navigate('/feed');
  } */

  return (
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo"leftIcon={<FaUserAlt/>}/>
              
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email"leftIcon={<MdEmail/>}/>
              
              <Input name="password" errorMessage={errors?.password?.message}s control={control} placeholder="senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Criar minha conta" variant='secondary' type="submit"/>
            </form>
            <Row>
              Ao Clicar em "criar conta grátis", declaro que aceito as politicas de privacidade e os termos de uso da DIO
              <b>Já tenho conta</b>
              <CriarText >Criar conta</CriarText>
            </Row>
          </Wrapper>
          
        </Column>
        </Container>
    </>
  )
}

export { Cadastro };