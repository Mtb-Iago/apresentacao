# 📋 Formulário de Contato - Portfólio 2026

Este repositório contém a implementação da subpágina de **Contato**, desenvolvida com foco em experiência do usuário (UX), acessibilidade e design responsivo.

## 🎯 Objetivo

Prover uma interface de comunicação direta, integrada ao Design System do portfólio, permitindo que visitantes entrem em contato para consultorias, palestras ou networking.

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura clara com tags `main`, `section`, `header` e `form`.
- **CSS3 Moderno:** - Uso de **Variáveis CSS** para temas dinâmicos.
  - Layout flexível e adaptável (Mobile-First).
  - Efeitos de _Glow_ e transições suaves.
- **JavaScript Vanilla:**
  - `script.js`: Gerenciamento global de tema (Dark/Light) com persistência no `localStorage`.
  - `form.js`: Lógica de validação de campos e manipulação de estados de erro.

## 🏗️ Estrutura do Formulário

O formulário (`#contactForm`) foi projetado com os seguintes campos técnicos:

| Campo          | Tipo       | Descrição                                                 |
| :------------- | :--------- | :-------------------------------------------------------- |
| **Nome**       | `text`     | Identificação do remetente.                               |
| **Email**      | `email`    | Canal de resposta com validação nativa.                   |
| **Telefone**   | `tel`      | Contato telefônico formatado.                             |
| **Assunto**    | `select`   | Dropdown com opções pré-definidas (Consultoria/Palestra). |
| **Mensagem**   | `textarea` | Área de texto livre com redimensionamento vertical.       |
| **Newsletter** | `checkbox` | Opção de opt-in para novidades.                           |

## 🎨 Design & Temas

O componente é totalmente compatível com o sistema de cores dinâmico do projeto:

- **Dark Mode (Padrão):** Fundo escuro (`#0b111f`) com bordas sutis e brilho indigo.
- **Light Mode:** Ativado via classe `.light`, alternando para fundos claros (`#f8fafc`) e textos de alto contraste.
- **Estados de Validação:** Quando um campo é inválido, a classe `.error` é aplicada via JS, alterando as bordas para vermelho e exibindo mensagens de erro animadas.

## 📂 Organização de Arquivos

```bash
├── index.html          # Estrutura da página de contato
├── assets/
│   ├── css/
│   │   └── form.css    # Estilos específicos do formulário (variáveis locais)
│   └── js/
│       └── form.js     # Lógica de validação e envio
```
