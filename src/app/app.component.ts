import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas-app';

  tarefaForm: FormGroup = new FormGroup({
    descricao: new FormControl('')
  });

  private cadastrarTarefa(): void {
    console.log(this.tarefaForm.value);
  }

}
