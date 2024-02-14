 <img align="center" alt="-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">  <img align="center" alt="-React Native" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg">



            
# **Documentação do Projeto de React Native do evento NLW-EXPERT:**

### **🍔 Hamburgueria**

Este documento descreve o código-fonte e as funcionalidades do aplicativo de hamburgueria desenvolvido em React Native. 

## **Visão Geral do Projeto**

O projeto consiste em um aplicativo móvel desenvolvido com React Native para uma hamburgueria. Ele oferece as seguintes funcionalidades principais:

1. Navegação pelo cardápio de produtos.
2. Seleção de produtos por categoria.
3. Adição de produtos ao carrinho de compras.
4. Realização de pedidos com integração ao WhatsApp.

O aplicativo é composto por múltiplas telas, incluindo a tela inicial que exibe o cardápio de produtos, a tela do carrinho de compras e a tela de confirmação do pedido.
## **Figma**
link:https://www.figma.com/file/YdfUAzz1ugm8MJBpVO3exg/NLW-expert-%E2%80%A2-Orders-(Community)?type=design&node-id=2%3A287&mode=dev&t=J69iqMdUsuBZsctc-1

## **Estrutura do Projeto**

O projeto está estruturado da seguinte forma:

- **`src/components`**: Contém componentes reutilizáveis.
- **`src/utils`**: Contém dados estáticos, como categorias e produtos.
- **`src/stores`**: Contém a lógica de gerenciamento de estado do carrinho.
- **`src/screens`**: Contém as telas do aplicativo.

## **Componentes Principais**

### **`Header`**

Componente responsável por exibir o cabeçalho em todas as telas do aplicativo, exibindo o título e informações adicionais, como a quantidade de itens no carrinho.

### **`CategoryButton`**

Botão de categoria utilizado para filtrar os produtos exibidos na tela principal.

### **`Product`**

Componente que exibe as informações de um produto, como nome, preço e imagem. Permite ao usuário adicionar o produto ao carrinho.

### **`Input`**

Componente de entrada de texto utilizado para capturar o endereço de entrega do usuário.

### **`Button`**

Botão utilizado para enviar o pedido. Possui um ícone de seta indicando a ação.

### **`LinkButton`**

Botão utilizado para navegar de volta ao cardápio principal.

## **Telas do Aplicativo**

### **Tela Inicial (Home)**

A tela inicial exibe o cardápio de produtos, permitindo ao usuário selecionar produtos por categoria. Os produtos são exibidos em uma lista de seções.

### **Tela de Carrinho (Cart)**

A tela de carrinho exibe os produtos selecionados pelo usuário, permitindo a remoção de itens e a inserção do endereço de entrega. Ao enviar o pedido, os produtos são enviados para o WhatsApp do estabelecimento para confirmação.

## **Integrações**

O aplicativo integra-se ao WhatsApp para facilitar o processo de pedidos. Ao enviar o pedido, o usuário é redirecionado para o WhatsApp com as informações do pedido preenchidas automaticamente.

## **Ferramentas e Bibliotecas Utilizadas**

### **React Native**

**Objetivo**: Framework para construção de aplicativos móveis nativos usando JavaScript e React.

**Utilizado em**: Todo o projeto.

### **React Navigation**

**Objetivo**: Biblioteca para gerenciamento de navegação em aplicativos React Native.

**Utilizado em**: Navegação entre telas do aplicativo.

### **Expo**

**Objetivo**: Plataforma e conjunto de ferramentas para desenvolvimento de aplicativos React Native.

**Utilizado em**: Facilita o desenvolvimento, compilação e deploy do aplicativo.

### **@react-native-async-storage/async-storage - createJSONStorage & persist**

**Objetivo**: Utilizado para armazenamento de dados de forma assíncrona no React Native, com ênfase nos métodos **`createJSONStorage`** e **`persist`**.

**Utilizado em**: Implementação do armazenamento de dados locais, como preferências do usuário e persistência de pedidos em rascunho. Além disso, é utilizado em conjunto com o Zustand e o middleware **`persist`** para garantir a persistência dos dados do carrinho de compras entre as sessões da aplicação.

### **Zustand**

**Objetivo**: Biblioteca de gerenciamento de estado para aplicações React.

**Utilizado em**: Gerenciamento de estado global da aplicação, incluindo o carrinho de compras.

### **@expo/vector-icons**

**Objetivo**: Conjunto de ícones vetoriais para uso em aplicativos Expo.

**Utilizado em**: Exibição de ícones, como o ícone de adicionar ao carrinho.

### **Expo Router**

**Objetivo**: Biblioteca para roteamento em aplicativos Expo.

**Utilizado em**: Navegação entre telas e manipulação de parâmetros de rota.

### **FlatList, SectionList, ScrollView**

**Objetivo**: Componentes para exibição de listas e conteúdos roláveis.

**Utilizado em**: Exibição de listas de produtos e carrinho de compras.

### **@expo/react-native-keyboard-aware-scroll-view**

**Objetivo**: Componente para rolagem automática de conteúdo ao exibir o teclado virtual.

**Utilizado em**: Tela de carrinho de compras para melhorar a experiência do usuário ao inserir o endereço de entrega.

Esta documentação fornece uma visão geral detalhada do projeto, destacando as principais funcionalidades, componentes, integrações e ferramentas utilizadas no desenvolvimento do aplicativo de hamburgueria em React Native. Se precisar de mais alguma coisa, estou à disposição para ajudar!

## **Configurando o Número do WhatsApp da Hamburgueria**

Antes de utilizar o aplicativo, lembre-se de configurar corretamente o número de WhatsApp da hamburgueria. Siga os passos abaixo para inserir o número corretamente:

1. **Abra o Arquivo `constants.ts`**: Navegue até o diretório do projeto e abra o arquivo **`constants.ts`** localizado em **`src/utils/constants.ts`**.
2. **Preencha o Número de WhatsApp da Hamburgueria**: Na constante **`PHONE_NUMBER`**, insira o número de WhatsApp da hamburgueria, incluindo o código do país e o DDD, se aplicável. Certifique-se de incluir apenas números, sem espaços, traços ou outros caracteres.
    
    ```tsx
    
    export const PHONE_NUMBER = "";
    
    ```
    
3. **Salve as Alterações**: Após inserir o número corretamente, salve as alterações no arquivo.
4. **Teste a Integração com o WhatsApp**: Após configurar o número de WhatsApp da hamburgueria, teste a integração enviando um pedido pelo aplicativo. Certifique-se de que ao enviar o pedido, ele seja encaminhado corretamente para o número de WhatsApp da hamburgueria.
