import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowIfComponent } from "./aulas/control-flow-if/control-flow-if.component";
import { ControlFlowForComponent } from "./aulas/control-flow-for/control-flow-for.component";
import { SwitchCaseComponent } from "./aulas/switch-case/switch-case.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlFlowIfComponent, ControlFlowForComponent, SwitchCaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}
