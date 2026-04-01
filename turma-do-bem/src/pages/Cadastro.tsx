import React from 'react';
import { useForm } from 'react-hook-form';

// Interface para garantir o uso correto de TypeScript [cite: 218, 237]
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Cadastro - Turma do Bem
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              {...register("nome", { required: "O nome é obrigatório", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${errors.nome ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.nome && <span className="text-red-500 text-xs">{errors.nome.message}</span>}
          </div>
          {/* Campo Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              {...register("email", { 
                required: "E-mail é obrigatório", 
                pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" } 
              })}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>
          {/* Campo Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              {...register("senha", { required: "A senha é obrigatória", minLength: { value: 6, message: "Mínimo 6 caracteres" } })}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${errors.senha ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.senha && <span className="text-red-500 text-xs">{errors.senha.message}</span>}
          </div>
        </form>
      </div>
    </div>
  ); 

export default Cadastro;