# 📚 Fundamentos do Angular

## 🧩 Componentes
São blocos de construção fundamentais do Angular, permitindo a criação de **elementos HTML reutilizáveis e dinâmicos**. Cada componente é composto por:

- Um **template HTML**
- Uma **classe TypeScript**
- Um **arquivo de estilo CSS/SCSS**

---

## 🔗 Data Bindings

### 🔹 Property Binding (`[property]`)
Permite a **atualização dinâmica** das propriedades de elementos HTML com base em valores definidos na classe do componente.

```html
<img [src]="imageUrl">
```

---

### 🔹 Event Binding (`(event)`)
Permite **responder a eventos do usuário**, como cliques ou pressionamento de teclas.

```html
<button (click)="onClick()">Clique aqui</button>
```

---

### 🔹 Attribute Binding (`[attr.attribute]`)
Manipula **atributos HTML diretamente**, útil para atributos que não são propriedades padrão de DOM.

```html
<input [attr.aria-label]="descricao">
```

---

### 🔹 Style Binding (`[style.property]`)
Aplica estilos **dinamicamente** aos elementos HTML.

```html
<p [style.color]="isErro ? 'red' : 'green'">Status</p>
```

---

### 🔹 Class Binding (`[class.class-name]`)
Adiciona ou remove classes CSS com base em **valores booleanos**.

```html
<div [class.ativo]="isAtivo">Usuário</div>
```

---

### 🔁 Two-Way Data Binding (`[(ngModel)]`)
Sincroniza os dados **bidirecionalmente** entre a classe do componente e o template.

```html
<input [(ngModel)]="nome">
<p>Olá, {{ nome }}!</p>
```

> Necessita importar `FormsModule`.

---

## 🔄 Comunicação Entre Componentes

### 📥 `@Input`
Permite ao componente **filho receber dados** do componente pai.

```ts
@Input() titulo: string;
```

---

### 📤 `@Output`
Permite ao componente **filho emitir eventos** para o componente pai.

```ts
@Output() clicado = new EventEmitter<string>();

this.clicado.emit('Olá, Pai!');
```

---

## 🚫 Código Duplicado
Evite repetição excessiva de código utilizando **componentização**, criando componentes reutilizáveis para manter a aplicação organizada, limpa e de fácil manutenção.

---

## 🧠 Diretivas

### ✂️ `*ngIf`
Renderiza elementos de forma **condicional** com base em uma expressão booleana.

```html
<div *ngIf="usuarioLogado">Bem-vindo!</div>
```

---

### 🔁 `*ngFor`
Utilizada para **iterar sobre listas** e renderizar elementos no DOM dinamicamente.

```html
<li *ngFor="let item of lista">{{ item }}</li>
```

---

### 🎨 `ngStyle` e `ngClass`
Permitem aplicar **estilos e classes CSS dinamicamente**.

```html
<!-- ngStyle -->
<p [ngStyle]="{ color: status === 'erro' ? 'red' : 'green' }">Mensagem</p>

<!-- ngClass -->
<div [ngClass]="{ 'ativo': isAtivo, 'inativo': !isAtivo }">Status</div>
```

---

## 🔄 Pipes
Pipes transformam valores diretamente no template. São utilizados para **formatação de dados**, como datas, números, textos, etc.

```html
<p>{{ hoje | date:'shortDate' }}</p>
<p>{{ preco | currency:'BRL' }}</p>
```

---

### ✅ Tabela Resumo

| Assunto                  | Descrição |
|--------------------------|-----------|
| **Componentes**          | Blocos reutilizáveis com HTML, lógica e estilo |
| **Property Binding**     | Atualiza propriedades de elementos HTML dinamicamente |
| **Event Binding**        | Executa ações com base em eventos do usuário |
| **Attribute Binding**    | Manipula atributos HTML dinamicamente |
| **Style Binding**        | Aplica estilos CSS com base em condições |
| **Class Binding**        | Adiciona classes CSS dinamicamente |
| **Two-Way Data Binding** | Sincronização bidirecional entre template e classe |
| **@Input**               | Envia dados do componente pai para o filho |
| **@Output**              | Emite eventos do filho para o pai |
| **Código Duplicado**     | Evitado com componentização |
| **NgIf**                 | Exibe elementos condicionalmente |
| **NgFor**                | Itera sobre listas e renderiza elementos |
| **NgStyle / NgClass**    | Aplica estilos e classes CSS dinamicamente |
| **Pipes**                | Formata e transforma dados no template |
