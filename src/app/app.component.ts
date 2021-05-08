import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TarefaService} from './service/tarefa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas-app';

  constructor(private tarefaService: TarefaService){}

  tarefaForm: FormGroup = new FormGroup({
    descricao: new FormControl('')
  });

  public cadastrarTarefa(): void {
    console.log(this.tarefaForm.value);
    this.tarefaService.cadastrarTarefa(this.tarefaForm.value).subscribe( tarefaRetorno => {
      console.log(tarefaRetorno);
    });
  }

}
