import React from "react";
import { useForm } from "react-hook-form";

interface CadastroFormData {
 nome: string;
 email: string;
 colegio: string;
 idade: number;
 nomeResponsavel: string;
 contatoResponsavel: string;
 cpf: string;
 dataNascimento: string;
 endereco: string;
 telefone: string;

}
const CadastroAluno: React.FC = () => {
 const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<CadastroFormData>();
 
   const onSubmit = (data: CadastroFormData) => {
     console.log("Dados validados:", data);
     alert("Cadastro realizado com sucesso (Simulação)!");
   };
 
   return (
     <div className="min-h-screen bg-base text-text selection:bg-accent/30 selection:text-accent font-sans antialiased flex items-center justify-center px-6">
       <div className="w-full max-w-md bg-mantle rounded-apple-lg p-10 shadow-2xl border border-white/5 space-y-6">
         <h2 className="text-2xl font-semibold text-center">
           🦷 Cadastro para atendimento
         </h2>
 
         <p className="text-subtext text-center text-sm">
           Comece a transformar sorrisos hoje mesmo.
         </p>
 
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
           {/* Nome */}
           <div>
             <label className="block text-sm text-subtext">Nome completo</label>
             <input
               type="text"
               {...register("nome", {
                 required: "O nome é obrigatório",
                 minLength: { value: 3, message: "Mínimo 3 caracteres" },
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.nome ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.nome && (
               <span className="text-red-400 text-xs">
                 {errors.nome.message}
               </span>
             )}
           </div>
 
           {/* Email */}
           <div>
             <label className="block text-sm text-subtext">E-mail</label>
             <input
               type="email"
               {...register("email", {
                 required: "E-mail é obrigatório",
                 pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.email ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.email && (
               <span className="text-red-400 text-xs">
                 {errors.email.message}
               </span>
             )}
           </div>
 
           {/* colegio */}
           <div>
             <label className="block text-sm text-subtext">Colegio</label>
             <input
               type="text"
               {...register("colegio", {
                 required: "O colegio é obrigatório",
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.colegio ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.colegio && (
               <span className="text-red-400 text-xs">
                 {errors.colegio.message}
               </span>
             )}
           </div>
 
           {/* Idade */}
           <div>
             <label className="block text-sm text-subtext">Idade</label>
             <input
               type="number"
               {...register("idade", {
                 required: "A idade é obrigatória",
                 min: { value: 0, message: "Idade inválida" },
               })}
               className={`mt-1 w-full p-3 rounded-lg bg-base border outline-none transition
               ${errors.idade ? "border-red-500" : "border-white/10 focus:border-accent"}`}
             />
             {errors.idade && (
               <span className="text-red-400 text-xs">
                 {errors.idade.message}
               </span>
             )}
           </div>
 
           {/* Botão */}
           <button
             type="submit"
             className="w-full py-3 bg-accent text-base font-bold rounded-apple transition-all hover:brightness-110 active:scale-95"
           >
             Criar conta
           </button>
         </form>
       </div>
     </div>
   );   
};

export default CadastroAluno;