import {Component, EventEmitter, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {IFilterOptions } from '../../../interfaces/user/filter-options.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [MatSelectModule, 
            MatInputModule,
            FormsModule,
            CommonModule
            ],

  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss'
})

export class FilterListComponent {

   filterOptions:IFilterOptions = {
    nome:undefined,
    email:undefined,
    funcao:undefined,
    status:undefined,
   }

   statusList=[
    {description:'Ativo', value:true},
    {description:'Inativo', value:false}
   ];

   @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>(); // Será enviado (outPut) ao elemento Pai (app.component)

   onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
    // console.log(this.filterOptions);
   }

}
