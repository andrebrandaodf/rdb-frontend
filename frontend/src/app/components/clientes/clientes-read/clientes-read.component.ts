import { Endereco } from './../endereco.model';
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes.model';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  endereco: Endereco[];
  clientes: Clientes[];
  displayedColumns = ['id', 'nome', 'cpf',this.endereco, 'telefone', 'email']

  constructor(private clientesService: ClientesService) { 

  }

  ngOnInit(): void {
    this.clientesService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes);
    })
  }

}
