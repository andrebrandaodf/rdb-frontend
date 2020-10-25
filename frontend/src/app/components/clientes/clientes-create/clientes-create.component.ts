import { EnderecoService } from './../endereco.service';
import { Endereco } from './../endereco.model';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientesService } from './../clientes.service';
import { Clientes } from '../clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {
  endereco: Endereco;
  clientes: Clientes = {
   nome: '',
   cpf: '',
   endereco:{
     cep: '',
     logradouro: '',
     bairro: '',
     cidade: '',
     uf:'',
     complemento: '' 
   },
   telefone: '',
   email: ''
   }

  constructor(private clientesService: ClientesService, private enderecoService: EnderecoService, private router: Router) { 

  }

  ngOnInit(): void {
    
  }

  createClientes(): void{
    this.clientesService.create(this.clientes).subscribe(() => {
      this.enderecoService.create(this.endereco)
      this.clientesService.showMessage('Cliente cadastrado!')
      this.router.navigate(['/clientes'])
    })
  }
   
  cancel(): void{
    this.router.navigate(['/clientes'])
  }
}
