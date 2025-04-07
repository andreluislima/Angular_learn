import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-main-list',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './main-list.component.html',
  styleUrl: './main-list.component.scss'
})
export class MainListComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'tipoServico', 'documento', 'telefone', 'email', 'situacao'];
  dataSource = new MatTableDataSource<ListaTeste>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ListaTeste {
  nome: string;
  tipoServico: string;
  documento: string;
  telefone: string;
  email: string;
  situacao: string;
}

const ELEMENT_DATA: ListaTeste[] = [
  {
    nome: 'João da Silva',
    tipoServico: 'Encanador',
    documento: '123.456.789-00',
    telefone: '(11) 99999-0000',
    email: 'joao@exemplo.com',
    situacao: 'Atfivo'
  },
  {
    nome: 'Maria Souza',
    tipoServico: 'Eletricista',
    documento: '987.654.321-00',
    telefone: '(21) 98888-1122',
    email: 'maria@eletrica.com',
    situacao: 'Ativo'
  },
  {
    nome: 'Carlos Web',
    tipoServico: 'Desenvolvedor Web',
    documento: '12.345.678/0001-99',
    telefone: '(31) 97777-3333',
    email: 'carlos@webcode.com',
    situacao: 'Inativo'
  },
  {
    nome: 'Fernanda Lima',
    tipoServico: 'Designer Gráfico',
    documento: '321.654.987-00',
    telefone: '(41) 96666-4444',
    email: 'fernanda@design.com',
    situacao: 'Ativo'
  },
  {
    nome: 'ConstruService Ltda',
    tipoServico: 'Reformas e Construções',
    documento: '98.765.432/0001-55',
    telefone: '(51) 95555-6666',
    email: 'contato@construservice.com',
    situacao: 'Ativo'
  },
];
