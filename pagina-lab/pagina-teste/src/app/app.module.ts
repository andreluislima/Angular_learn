import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotaoifComponent } from './botaoif/botaoif.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { RevistaComponent } from './revista/revista.component';
import { LivroComponent } from './livro/livro.component';
import { FilmeComponent } from './filme/filme.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClickMeComponent } from './click-me/click-me.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoifComponent,
    ListaLivrosComponent,
    RevistaComponent,
    LivroComponent,
    FilmeComponent,
    ProdutoComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
