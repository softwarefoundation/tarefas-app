import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa.js';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  public cadastrarTarefa(tarefa: Tarefa ): Observable<Tarefa> {
    console.log(tarefa);
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  public listarTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl.concat('/todos'));
  }

  public deletarTarefa(tarefa: Tarefa): Observable<void> {
    const url = `${this.apiUrl + '/' + tarefa.id}`;
    console.log('Deletar tarefa: ' + url);
    return this.http.delete<void>(url);
  }

  public concluirTarefa(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.apiUrl + '/' + tarefa.id}`;
    console.log('Concluir tarefa: ' + url);
    return this.http.patch<Tarefa>(url, {});
  }

}
