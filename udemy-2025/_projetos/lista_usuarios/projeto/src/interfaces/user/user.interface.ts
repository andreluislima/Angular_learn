import { IAdress } from "./adress.interface"

export interface IUser{
    id:number,
    nome:string,
    dataNascimento:string,
    telefone:string,
    email:string,
    cpf: string,
    cnpj: string,
    cnh: string,
    tipoContrato: string
    duracaoContrato: string,
    dataInicioContrato: string,
    ativo: boolean,
    funcao: string,
    dataCadastro: string,
    endereco:IAdress

}

