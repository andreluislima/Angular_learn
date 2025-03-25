import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  imports: [],
  templateUrl: './control-flow-if.component.html',
  styleUrl: './control-flow-if.component.scss'
})
export class ControlFlowIfComponent {

  mostrarMensagem:boolean = true;

  exibirMensagem(){
    this.mostrarMensagem = false;
  }

  // mostrarMensagem:boolean = false;

  // exibirMensagem(){
  //   this.mostrarMensagem = true;
  // }
}
