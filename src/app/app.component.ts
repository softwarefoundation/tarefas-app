import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TarefaService} from './service/tarefa.service';
import {Tarefa} from './model/tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tarefas-app';
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService){}

  tarefaForm: FormGroup = new FormGroup({
    descricao: new FormControl('')
  });


  ngOnInit(): void {
    this.tarefaService.listarTarefas().subscribe( tarefasRetorno => this.tarefas = tarefasRetorno);
  }

  public cadastrarTarefa(): void {
    this.tarefaService.cadastrarTarefa(this.tarefaForm.value).subscribe( tarefaRetorno => {
      this.tarefas.push(tarefaRetorno);
      this.tarefaForm.reset();
    });
  }

  public listarTarefas(): void {
    this.tarefaService.listarTarefas().subscribe( tarefasRetorno => {
      console.log(tarefasRetorno);
      this.tarefas.concat(tarefasRetorno);
      this.tarefaForm.reset();
    });
  }

}
