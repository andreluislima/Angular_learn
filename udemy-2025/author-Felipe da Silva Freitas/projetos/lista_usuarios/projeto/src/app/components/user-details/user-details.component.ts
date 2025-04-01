import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { IUser } from '../../interfaces/user/user.interface';
import { PhonePipe } from "../../pipes/phone.pipe";
import { AddressPipe } from "../../pipes/address.pipe";
import { StatusPipe } from "../../pipes/status.pipe";

@Component({
  selector: 'app-user-details',
  imports: [MatListModule, MatDividerModule, PhonePipe, AddressPipe, StatusPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Input({required:true}) user: IUser = {} as IUser;

  
}
