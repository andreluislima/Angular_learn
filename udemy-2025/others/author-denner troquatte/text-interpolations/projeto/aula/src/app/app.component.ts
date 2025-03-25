import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInterpolationComponent } from './aulas/text-interpolation/text-interpolation.component';
import { BindingComponent } from "./aulas/binding/binding.component";
import { AtributeBindingComponent } from "./aulas/atribute-binding/atribute-binding.component";
import { EventBindingComponent } from "./aulas/event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./aulas/two-way-binding/two-way-binding.component";
import { ControlFlowIfComponent } from "./aulas/control-flow-if/control-flow-if.component";
import { ControlFlowForComponent } from "./aulas/control-flow-for/control-flow-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextInterpolationComponent, BindingComponent, AtributeBindingComponent, EventBindingComponent, TwoWayBindingComponent, ControlFlowIfComponent, ControlFlowForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula';
}
