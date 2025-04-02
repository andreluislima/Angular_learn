import {Component,ChangeDetectionStrategy} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { IFilterOpions } from '../../interfaces/user/filter-options.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',

  imports: [MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatSelectModule,
            MatButtonModule,
            FormsModule
          ],

  templateUrl: './filter.component.html',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  filterOpions:IFilterOpions = {
    name: undefined,
    startDate:undefined,
    endDate:undefined,
    status:undefined
  }

  statusList = [
    {description: 'Ativo', value:true},
    {description: 'Inativo', value:false}
  ];

  onFilter(){
    console.log(this.filterOpions);
  }

  dateSelected(date:any){
    console.log(date);
  }
}
