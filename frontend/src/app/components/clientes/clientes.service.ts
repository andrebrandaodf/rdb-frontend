import { map, catchError } from 'rxjs/operators';
import { Clientes } from './clientes.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl="http://localhost:3001/clientes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

   showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'], 
    });
  }

  create(clientes: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(this.baseUrl, clientes).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Clientes>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Clientes>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
   }

   update(clientes: Clientes): Observable<Clientes>{
    const url = `${this.baseUrl}/${clientes.id}`;
    return this.http.put<Clientes>(url, clientes).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Clientes>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Clientes>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  }
