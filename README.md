# reactjs-dio-clone

## Configuração de Ambiente React
- Instalações necessárias:
  - Visual Studio Code;
  - NodeJS e NPM;
  - Yarn;
  - React DevTools;
  - Extensões para VSCode;

## O que é React
Biblioteca JS para criação de interfaces do usuário, ou seja, atua no front-end, porém existem formas de levar o React para o back-end. Foir criado pelo Facebook em 2011 para solucionar um problema com a otimização das notificações na aplicação de Zuckeberg, daí veio o React.

### Biblioteca
É o recurso mais usado da programação. A ideia da biblioteca é compartilhar soluções por meio de funções ou métodos. Vamos fazer uma analogia: se você tiver que ir que fazer um trabalho de matemática, poderá ir até uma biblioteca e pegar um livro e usar as equações contidas no mesmo, então não será preciso desenvolver as equações do absoluto zero, elas simplesmente estão lá para uso. E com isso, entendemos o conceito do que é uma biblioteca.

### Framework
É uma ferramenta que ajuda o desenvolvedor a ter como único objetivo foca em desenvolver o projeto, não em detalhes de configurações.
#### Exemplos:
- Angular;
- Vue;
- Ionic;
- NextJS (framework back-end);
- express;
- LoopBack;

## Entendendo o ciclo de vida de um componente
Já entendendo que React é baseado em componentes, vamos entender sobre o estado e ciclo de vida de componentes no React (que por sinal, lida muito bem com isso). A ideia é que: A partir de um estado ou efeito colateral que um componente pode mudar. Vamos entender agora sobre o **LifeCycle components**:

- Constructor
  - 1 - getDerivedStateFromProps;
- 2 - componentDidMount;
- 3 - shouldComponentUpdate;
- 4 - render;
  - 5 - getSnapshotBeforeUpdate;
- 6 - componetDidUpdate;
- 7 - componentWillUnmount;

O React atualiza a todo momento, detectando alterações nos componentes e as aplicando de imediato, explicando assim o conceito de estado e ciclo de vida.

## Iniciando um projeto com React CLI e Navegação no React

### O que é React CLI (CRA)?
Create React App é um ambiente confortável para aprender react, e a melhor maneira de começar um single-page application em React. Além de configurar seu ambiente de desenvolvimento para utilizar as funcionalidade mais recentes do JS, ele fornece uma experiência de desenvolvimento agradável, e otimiza o seu ambiente de produção

````
npx create-react-app <nome-do-projeto>
````
### Adicionando Navegação na aplicação
Vamos usar o react router para realizar a navegação entre páginas (no caso, componentes)

## Estilizaçao com Styled-components
Basicamente, styled-components é uma biblioteca que possibilita escrever códigos CSS dentro do JS. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web

## Trabalhando com Hooks Básicos
Até a versão 16.7 do React, algumas funcionalidade só eram possíveis de ser acessadas através de classes (como, por exemplo, o lifecycle). Apesar da possibilidade de criar componentes a partir de função, até essa versão, eles só recebiam propriedades, não podendo acessar todas as funcionalidades do React, como as classes.

Na versão 16.8 do React, foram lançados os hooks, que permitem o uso de vários recursos de forma simples através de funções, Eles também ajudam a organizar a lógica usada dentro dos componentes.

**Resumindo**: Os Hooks vieram para facilitar o desenvolvimento em React, e deixar os componentes mais simples e também a forma de manipular os mesmos

### useState
É um hooks usado para lidar com estados de algo dentro do componente. É bem sugestivo quanto ao que faz.

Vamos a um exemplo: temos um componente Input, dentro desse input, vai ter o estado desse componente, que é o texto que o mesmo carrega, a cada alteração, esse componente deve ser re-renderizado. o useState lida com isso de forma fácil, facilitando no desenvolvimento de qualquer porojeto. O useState é um função com um valor inicial, nós colocamos entre colchetes, pois retorna um array com duas opções:
1 -  o estado;
2 - a função que altera esse estado

**OBS.**: O react trabalha com o conceito de imutabilidade, ou seja, um estado não pode ser alterado, mas sobrescrito sobre o estado anterior. Vamos dizer que o useState armazena estados e altera os mesmos no decorrer do uso da aplicação;

```` JS
const [name, setName] = useState('Matheus');

  const handleChangeName = () => {
    setName(prev => prev === 'Matheus' ? 'Fulano' : 'Matheus');
  }
````

**NOTA**: é um hook se trata de uma função.

### useEffect
O useEffect é um hook que vai trabalhar com o ciclo de vida do componente. Um componente tem um momento antes de renderizar, a hora que ele está renderizando, a hora que já foi renderizado, a hora em que vai deixar de "existir" (deixar a tela), o momento em que está sendo desmontado, e o momento em que já foi desmontado.

O useEffect consegue fazer essa manipulações que envolvem o ciclo de vida de um componente, o primeiro parâmetro que vai fazer algo. Já o segundo parâmetro é um array de dependência,ou seja é quando eu quero que o useEffect execute novamente.

````JS
useEffect(()=> {
    //alert('renderizei');
}, []);
````

O useEffect serve para gerenciar o ciclo de vida de um componente.
**NOTA**: junto com useState, o useEffect é um dos Hooks mais usados.

### useMemo
É Um hook bem específico. Este hook memoriza algum cálculo, ação ou valor que não precisa ser re-renderizado. Um componente é sempre re-renderiza quando há alteração de estado, mas com useMemo
lida com isso de forma prática (evitando que nossa aplicação mais recurso do computador);

**NOTA**: useMemo salva referências em variáveis (var, let, const);

### useCallback
É similar ao useMemo, porém tem como diferença que não memoriza um valor ou ação, mas uma função em si. 

**NOTA**: useMemo salva referências em funções;

# Trabalhando com formulários no ReactJS
Vamos aprender como trabalhar com formulários e fazer requisições para o servidor.

## 1 - React Hook Forms
É uma ferramenta de formulários de alto desempenho, flexíveis, extensíveis e fácil de usar.

````
`npm install react-hook-form` ou `yarn add react-hook-form`

yarn add  @hookform/resolvers yup

yarn add yup
````
## Axios
Excelente pacote para trabalhar com requisições. Usamos o axios para fazer chamadas HTTP para APIs externas
````
yarn add axios
npm i -g json-server
````
**NOTA**: Vamos usar uma API fake, no caso o json server (se econtra no site do NPM, como: json server npm)

# Fundamentos do TypeScript
Vamos aprender um pouco a respeito do TypeScript e porque devemos usar em nosso projeto. Vamos começar a chamar de TS daqui pra frente...

## O que é o TypeScript
Ts é um superset do JS, ou seja, um conjunto de ferramentas e formas eficientes de escrever códigos JS (JavaScript), adicionando recursos que não estão presentes de maneira nativa na linguagem. Não é um concorrente, mas um auxiliar/complemento para trabalhar com o JS. 

O TS começou a ser desenvolvido pela Microsoft em 2012, com objetivo de adicionar recursos e ferramentas que não estão presentes na linguagem JS (ou que apenas seriam mais dificeis de serem implementados), como: a tipagem estática e orientação a objetos de forma nativa. O TS veio para melhorar a qualidade do código e por consequência o produto final.

**NOTA**: O TS é usado em ambiente de desenvolvimento e não de produção.

## OS benefícios do TS
Por que usar o TypeScript? 

O TS nos traz diversos benefícios, mas podemos destacar o potencial de detecção de erros durante o desenvolvimento de projetos e a possibilidade de incluir a inteligência da IDE que está sendo usada. Isso reflete em um ambiente muito mais ágil e seguro enquanto o código está sendo digitado pelo usuário.

Além de ser uma linguagem fortemente tipada, trazendo vários conceitos de orientação a objetos, como: classes, heranças, encapsulamento, interfaces

## Conceitos básicos do TS
### Tipagem estática
É deixar claro que tipo de dado cada variável está recebendo e isso é super importante, e validações como essas geram melhor qualidade de código e no produto final, além da segurança também

````TS
const nome: string = 'Matheus';
const idade: number = 18;
const userAtivo: boolean = true;
````

### Inferência de tipos
Quando uma variável já está definida como um tipo, isso vai inferir na próxima vez que a variável for usada, tendo a inferência de tipos, não precisando declarar o tipo da variável novamente...
````TS
const nome = 'Matheus';
const idade = 18;
const userAtivo = true;
````
### Interfaces
Interfaces descrevem como um objeto deve se parecer. É quando queremos tipar um objeto, definindo os tipos do mesmo e usando os mesmos dentro do objeto criado. Aqui, os itens são obrigatórios em um objeto. Vamos dizer que as interfaces são abertas, mas tem os tipos fechados (que não podem ser alterados).

````TS
interface IUsuario {
  nome: string;
  idade: number;
  userAtivo: boolean;
}

const usuario: IUsuario = {
  nome: 'Matheus',
  idade: 18,
  userAtivo: true
}
````

### Type
É similar as interfaces, porém, vamos resumir a isso aqui:
- Interfaces podem herdar outras interfaces, types não.
- types pode assumir formatos distintos.

````TS
type IUsuario = {
  nome: string;
  idade: number;
  userAtivo?: boolean;
}

const usuario: IUsuario = {
  nome: 'Matheus',
  idade: 18,
  userAtivo: true
}
````
### Enum
Enum serve para declarar um conjunto de valores/constantes pré-definidos
É muito bom e prático também. Vamos supor que a nossa aplicação tem a opção de cargo de desenvolvedor, com diversas outras opções de cargo. Imaginemos agora que cada pessoa venha escrever o dito cargo de um jeito diferente, pois é, ficaria bem complicado mesmo... Os enums vêm para resolver e centralizar tudo isso e organizar melhor sua regra de negócio...

````TS
enum CARGO {
  DEVELOPER = 'Desenvolvedor'
}

const usuario = {
  nome: 'Matheus',
  cargo: CARGO.DEVELOPER
}
````