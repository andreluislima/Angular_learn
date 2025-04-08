import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { IUser } from '../../../interfaces/user/user.interface';
import { UsersList } from '../../../data/users-list';


@Component({
  selector: 'app-main-list',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './main-list.component.html',
  styleUrl: './main-list.component.scss'
})
export class MainListComponent {
  displayedColumns: string[] = ['nome', 'tipoServico', 'cpf', 'telefone', 'email', 'situacao'];
  usersList:IUser[] = UsersList;


}

 