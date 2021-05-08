import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa.js';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  apiUrl = 'http://localhost:8080/tarefa';

  constructor( private http: HttpClient ) { }

  public cadastrarTarefa(tarefa: Tarefa ): Observable<Tarefa> {
    console.log(tarefa);
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  public listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl.concat('/todos'));
  }

}
