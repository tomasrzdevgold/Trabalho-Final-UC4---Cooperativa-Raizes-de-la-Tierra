# 🌱 Trabalho Final — UC4

### Cooperativa Raízes de la Tierra
**Integrante:** Tomas Rojas

---

## 📖 Sobre o projeto

Este projeto representa o trabalho final da disciplina de **Programação Orientada a Objetos em TypeScript**, ministrada pelo **SENAC São Leopoldo**.

O trabalho contempla a utilização dos principais conceitos de Programação Orientada a Objetos (POO) apresentados durante a disciplina, aplicados na construção de um sistema de gerenciamento para uma cooperativa de alimentos.

---

## 🥕 Sobre o sistema

O sistema consiste em um programa para o gerenciamento de uma cooperativa de alimentos, permitindo:

- 👨‍🌾 Registrar produtores;
- 🍎 Registrar alimentos;
- 🏢 Registrar instituições que receberão doações;
- 🎁 Gerar doações destinadas às instituições;
- 🔄 Movimentar informações entre diferentes objetos do sistema;
- 🧩 Simular o funcionamento de um sistema completo utilizando os conceitos de POO.

> **Nota:** Atualmente, o sistema não utiliza banco de dados. Dessa forma, as informações cadastradas durante a execução são mantidas apenas enquanto o programa estiver em funcionamento.  
> Ao encerrar o sistema, os dados cadastrados são perdidos, com exceção dos dados de teste, que são inicializados automaticamente sempre que o sistema é executado.

---

## ⚙️ Instalação

### 1. Clonar o projeto

1. Abra o terminal de sua preferência. Recomenda-se utilizar o **Git Bash**.
2. No GitHub, acesse o repositório do projeto e clique no botão verde `<> Code`. Copie a URL HTTPS do repositório.
3. No terminal, execute:
   ```bash
   git clone URL_DO_REPOSITORIO
   ```
   *Substitua `URL_DO_REPOSITORIO` pela URL HTTPS copiada do GitHub.*
4. Após o download, abra a pasta do projeto em sua IDE de preferência.

---

## ▶️ Execução do sistema

### 1. Instalar o TypeScript
Abra o terminal da sua IDE ou o GitBash diretamente na pasta do projeto e execute:
```bash
npm install typescript@^6 -D
```
*Esse comando instala o TypeScript como uma dependência de desenvolvimento do projeto.*

### 2. Criar o arquivo `tsconfig.json`
Execute:
```bash
npx tsc --init
```
*Esse comando cria o arquivo `tsconfig.json`, responsável pelas configurações de compilação do TypeScript.*

### 3. Configurar o `tsconfig.json`
Após a criação do arquivo `tsconfig.json`, copie e cole o trecho de configuração abaixo dentro dele:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./src",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "esnext",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["./node_modules", "./dist"]
}
```

*Essa configuração informa ao TypeScript como os arquivos do projeto devem ser compilados e permite definir o arquivo de saída correspondente à lógica principal do sistema.*

### 4. Compilar automaticamente o projeto
Para evitar a necessidade de compilar o código manualmente sempre que uma alteração for realizada, utilize o modo *Watch* do TypeScript:
```bash
npx tsc --watch
```
Enquanto esse comando estiver em execução, o TypeScript acompanhará as alterações realizadas nos arquivos `.ts` e fará a compilação automaticamente.

💡 **Dica:** Mantenha essa janela do terminal aberta enquanto estiver utilizando o sistema.

### 5. Executar o sistema
Abra outra janela do terminal na pasta do projeto e execute:
```bash
node src/Main.js
```
O sistema será iniciado pelo arquivo `Main.js`, gerado a partir do arquivo principal `Main.ts`.

---

## 🧑‍💻 Tecnologias utilizadas

- **TypeScript**
- **Node.js**
- **Programação Orientada a Objetos (POO)**
- **Git / GitHub**

---

## 🎯 Objetivo

O objetivo deste trabalho é aplicar, de forma prática, os conceitos de Programação Orientada a Objetos em TypeScript estudados durante a disciplina, desenvolvendo um sistema capaz de representar o funcionamento de uma cooperativa de alimentos por meio da interação entre diferentes objetos e classes.

# 🧩 Principais classes

O sistema foi desenvolvido utilizando conceitos de **Programação Orientada a Objetos (POO)**, organizando as principais responsabilidades do sistema em classes e interfaces.

## 🍎 Food

A classe `Food` representa os alimentos disponíveis na cooperativa.

Ela possui informações como:

- Nome do alimento;
- Categoria;
- Quantidade disponível em quilogramas;
- Produtor responsável.

A classe possui métodos para:

- Consultar e alterar informações do alimento;
- Adicionar quantidade ao estoque;
- Remover quantidade do estoque;
- Consultar a quantidade disponível;
- Realizar doações para instituições.

A classe `Food` implementa a interface `Donatable`, utilizando o método `donate()` para realizar uma doação.

Quando uma doação é realizada, a quantidade informada é retirada do estoque do alimento e as informações são enviadas para a instituição selecionada por meio do método `receivedFood()`.

---

## 🏢 Institution

A classe `Institution` representa as instituições que recebem as doações de alimentos.

Ela possui informações como:

- Nome da instituição;
- Endereço;
- Número de pessoas atendidas;
- Alimentos recebidos.

A classe possui métodos para consultar e alterar suas informações, além de armazenar os alimentos recebidos através do método `receivedFood()`.

Dessa forma, a classe `Institution` é responsável por receber e armazenar o histórico das doações realizadas pela cooperativa.

---

## 👨‍🌾 Producer

A classe `Producer` representa um produtor responsável pelos alimentos da cooperativa.

Ela é uma **classe abstrata**, contendo informações como:

- Nome do produtor;
- CPF;
- Quantidade de alimentos.

A classe possui métodos para consultar e alterar essas informações.

Por ser abstrata, `Producer` não é utilizada diretamente para criar objetos. Ela serve como uma estrutura base para outras classes que representam diferentes tipos de produtores.

Além disso, a classe possui o método abstrato `present()`, que deve ser implementado pelas classes que herdarem de `Producer`.

---

## 🔗 Donatable

A interface `Donatable` define o comportamento relacionado à realização de doações.

A classe `Food` implementa essa interface, permitindo que os alimentos possam participar do processo de doação.

A utilização da interface ajuda a definir um comportamento que pode ser implementado por diferentes classes, mantendo uma estrutura organizada para o sistema.

---

# 🧠 Conceitos de POO utilizados

Durante o desenvolvimento do projeto foram utilizados diferentes conceitos de **Programação Orientada a Objetos**, entre eles:

- **Encapsulamento:** os atributos das classes são definidos como `private`, sendo acessados e modificados por meio de métodos `get` e `set`;
- **Abstração:** a classe `Producer` é definida como `abstract` e possui o método abstrato `present()`;
- **Interfaces:** a interface `Donatable` define um comportamento que é implementado pela classe `Food`;
- **Classes e objetos:** o sistema utiliza classes para representar produtores, alimentos e instituições, permitindo que os objetos interajam entre si;
- **Métodos:** cada classe possui métodos responsáveis por executar ações relacionadas à sua própria responsabilidade.