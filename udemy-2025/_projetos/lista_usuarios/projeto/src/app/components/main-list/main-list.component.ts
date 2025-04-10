import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  // usersList:IUser[] = UsersList; || -- dado 'chumbado', pois vem de dados de  uma lista fixa no codigo.
  
  @Input({required:true}) usersList:IUser[] = [];

  @Output('userSelected')userSelectedEmiit = new EventEmitter<IUser>();

  onUserSelected(user:IUser){
    console.log('user', user)
    this.userSelectedEmiit.emit(user);
  }



}

 