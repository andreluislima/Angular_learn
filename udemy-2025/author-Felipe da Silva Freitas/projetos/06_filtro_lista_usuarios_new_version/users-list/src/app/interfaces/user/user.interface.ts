import { Adress } from "../adress/adress.interface"
import { Status } from "../status/status.interface"

export interface IUser {
  nome: string
  email: string
  senha: string
  idade: number
  endereco: Adress
  telefone: string
  ativo: boolean
  funcao: string
  dataCadastro: string
  status: Status
}