import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  imports: [MatListModule,MatDividerModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Input({required:true}) user: IUser = {} as IUser;

  
}
