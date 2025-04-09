import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { IUser } from '../../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-details',
  imports: [MatListModule],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent {
  @Input({required:true}) user: IUser = {} as IUser;
}
