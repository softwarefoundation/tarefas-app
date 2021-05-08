import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TarefaService} from './service/tarefa.service';
import {Tarefa} from './model/tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas-app';
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService){}

  tarefaForm: FormGroup = new FormGroup({
    descricao: new FormControl('')
  });

  public cadastrarTarefa(): void {
    this.tarefaService.cadastrarTarefa(this.tarefaForm.value).subscribe( tarefaRetorno => {
      this.tarefas.push(tarefaRetorno);
      this.tarefaForm.reset();
    });
  }

}
