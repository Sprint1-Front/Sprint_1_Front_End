import React from 'react';
import { useForm } from 'react-hook-form';

interface CadastroFormData {
  nome: string;
  email: string;
  senha: string;
}

const Cadastro: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CadastroFormData>();

  const onSubmit = (data: CadastroFormData) => {
    console.log("Dados validados:", data);
    alert("Cadastro realizado com sucesso (Simulação)!");
  };

  return ();

export default Cadastro;