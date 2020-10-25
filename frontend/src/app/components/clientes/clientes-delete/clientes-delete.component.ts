import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes.model';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {

  clientes: Clientes;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientesService.readById(id).subscribe(clientes => {
      this.clientes = clientes;
    })
  
  }

  deleteClientes(): void{
    this.clientesService.delete(this.clientes.id).subscribe(() => {
      this.clientesService.showMessage('Clientes descadastrado com sucesso!');
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void{
    this.router.navigate(['/clientes']);
  }

}
