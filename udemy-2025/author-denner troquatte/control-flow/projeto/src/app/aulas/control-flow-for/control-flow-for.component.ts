import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-flow-for',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.scss'
})
export class ControlFlowForComponent {
  
  nomes: string[] = ['João', 'Maria', 'Carlos', 'Ana'];

  public itens = [{ name:'André'}]
  public estante:Array<{nome:string}> = [];

  public loadingData$:Observable<String[]> = of(
    [
      'item1',
      'item2',
      'item3',
    ]
  ).pipe(delay(3000));

  public trackByFn(index:number){
    return index;
  }

  public addNewName(value:string){
    return this.itens.push({name:value})
  }
  
}
