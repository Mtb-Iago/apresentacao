# 🚀 Personal Portfolio - Core Edition

Versão principal do meu portfólio profissional, desenvolvida com foco em **HTML5 semântico**, **CSS3 modular (BEM)** e persistência de estado.

## 🛠️ Tecnologias e Metodologias

- **HTML5 Semântico:** Uso de tags estruturais para SEO e acessibilidade.
- **CSS BEM (Block Element Modifier):** Metodologia aplicada para manter o código CSS organizado e escalável.
- **Dark/Light Mode Engine:** Lógica customizada para alternância de temas com persistência via `localStorage`.
- **API Integration:** Consumo dinâmico da API do GitHub para exibição de projetos em tempo real.

## 📁 Estrutura de Arquivos

- `/assets/css/style.css`: Estilização modular baseada em BEM.
- `/assets/js/script.js`: Gerenciamento de tema (Dark/Light) e persistência de preferência do usuário.
- `/assets/js/getInfo.js`: Integração assíncrona com o GitHub (`username: Mtb-iago`).
- `index.html`: Estrutura central do site.

## 🎯 Destaques Técnicos

- **State Management:** O tema selecionado (🌙/☀️) é recuperado automaticamente na carga da página.
- **Clean Architecture:** Código organizado seguindo boas práticas de desenvolvimento front-end.
- **Responsividade:** Layout adaptável para todos os dispositivos usando Grid e Flexbox puros.

---

## 🔗 Links do Projeto (Live Demo)

O projeto está publicado e pode ser acessado através das seguintes rotas personalizadas:

- **[Página Principal (Home)](https://iagooliveira-dev.vercel.app/)**
  - _O que é:_ O core do portfólio. Centraliza as tecnologias principais, integração com a API do GitHub para exibição de projetos em tempo real e o controle de tema (Dark/Light).
- **[/contato](https://iagooliveira-dev.vercel.app/contato)**
  - _O que é:_ Subpágina dedicada à comunicação. Possui um formulário robusto com validações de campos, checkbox de opt-in e uma interface limpa focada em conversão e UX.
- **[/sobre](https://iagooliveira-dev.vercel.app/sobre)**
  - _O que é:_ Página desenvolvida como atividade técnica de pós-graduação. Focada em Mobile-First e construída estritamente com HTML e CSS (sem JavaScript), demonstrando domínio de frameworks utilitários e semântica pura.

---

## 🛠️ Arquitetura de Roteamento (Vercel)

Para proporcionar uma experiência de navegação mais limpa e profissional (SEO Friendly), utilizei uma configuração avançada no `vercel.json`. Isso permitiu mascarar caminhos de diretórios complexos em URLs curtas e amigáveis:

```json
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/contato", "destination": "/formulario/formulario" },
    { "source": "/sobre", "destination": "/pos-graduacao-atividade1/sobre-mim" }
  ]
}
```

_© 2026 - Iago Oliveira_
