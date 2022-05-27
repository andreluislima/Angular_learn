import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'Página Teste';
// }

export class AppComponent {
  public exibirConteudo = false; // Para o conteúdo não ser exibido quando a página for carregada.
  public toggleConteudo(){
    this.exibirConteudo = !this.exibirConteudo;
  }
}