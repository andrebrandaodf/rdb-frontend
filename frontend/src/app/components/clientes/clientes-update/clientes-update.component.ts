import { Clientes } from '../clientes.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {

  clientes: Clientes;

  constructor(
    private clientesService: ClientesService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.clientesService.readById(id).subscribe(clientes =>{
      this.clientes = clientes;
    })
  }

  updateClientes(): void{
    this.clientesService.update(this.clientes).subscribe(() =>{
      this.clientesService.showMessage('Cliente atualizado com sucesso!')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void{
    this.router.navigate(['/clientes']);
  }

}
