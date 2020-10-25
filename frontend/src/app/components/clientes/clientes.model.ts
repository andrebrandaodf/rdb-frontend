import { Endereco } from './endereco.model';
export interface Clientes{
    id?:   number;
    nome:  String;
    cpf: String;
    endereco: Endereco;
    telefone: String;
    email: String;
}