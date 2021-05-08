import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TarefaService} from './service/tarefa.service';
import {Tarefa} from './model/tarefa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tarefas APP';
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService){}

  tarefaForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [Validators.required, Validators.minLength(3)])
  });


  ngOnInit(): void {
    this.listarTarefas();
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
      this.tarefas = tarefasRetorno;
      this.tarefaForm.reset();
    });
  }

  public deletarTarefa(tarefa: Tarefa): void {
    this.tarefaService.deletarTarefa(tarefa).subscribe(next => {
      this.listarTarefas();
    });
  }

  public concluirTarefa(tarefa: Tarefa): void {
    this.tarefaService.concluirTarefa(tarefa).subscribe(tarefaConcluida => {
      if ( tarefaConcluida.id ){
        console.log(`Concluir tarefa: ${tarefaConcluida}`);
        tarefa.concluido = tarefaConcluida.concluido;
        tarefa.dataConclusao = tarefaConcluida.dataConclusao;
      }
    });
  }

}
