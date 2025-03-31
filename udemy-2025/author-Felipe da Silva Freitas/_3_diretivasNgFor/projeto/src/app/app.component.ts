import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
   
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
   pessoaIndexSelected: number | undefined;

   listPessoas = [
    
    {name:'André Lima', idade:35},
    {name:'Claudio Oliveira', idade:35},
    {name:'José Bonifácio', idade:72},

   ];

   selecetPessoa(index:number){
    console.log(index)
    this.pessoaIndexSelected = index;
   }
  }
