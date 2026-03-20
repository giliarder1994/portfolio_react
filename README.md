# 💼 Portfólio Pessoal — Giliarde Rodrigues

## 📌 Sobre o projeto

Este repositório contém o código do meu portfólio pessoal, desenvolvido para apresentar
minha trajetória, habilidades técnicas, formação e projetos como Desenvolvedor Web com
foco em Back-End.

O projeto foi refatorado de HTML/CSS/JS puro para **React com CSS Modules**, aplicando
conceitos modernos de componentização, gerenciamento de estado e boas práticas de
desenvolvimento front-end.

🔗 **Acesse o portfólio:** [giliarder1994.github.io/portfolio-react](https://giliarder1994.github.io/portfolio-react/)

---

## 🎯 Objetivo

- Centralizar minhas informações profissionais em um único lugar
- Praticar componentização e organização de código com React
- Aplicar gerenciamento de estado com `useState` e hooks customizados
- Criar um portfólio profissional para processos seletivos de estágio em Back-End

---

## 🚀 Funcionalidades

- 🌗 Alternância de tema claro/escuro com persistência em `localStorage`
- 🧭 Navegação com scroll suave entre seções
- 📱 Layout totalmente responsivo (mobile e desktop)
- 🧩 Modais interativos para descrição dos projetos
- 📋 Modal de contato com cópia de e-mail para a área de transferência
- ⌨️ Fechamento de modais via tecla `ESC`
- 📄 Paginação de projetos gerenciada com estado React
- 🖱️ Feedback visual e animações suaves

---

## 🧠 Conceitos aplicados

- Componentização com React
- Gerenciamento de estado com `useState` e `useRef`
- Hook customizado (`useTheme`) para lógica de tema
- CSS Modules para escopo de estilos por componente
- CSS responsivo com Grid e Flexbox
- Variáveis CSS para temas claro e escuro
- Deploy automatizado com GitHub Actions

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| React 18 | Componentização e gerenciamento de estado |
| CSS Modules | Estilização com escopo por componente |
| Vite | Bundler e servidor de desenvolvimento |
| Font Awesome | Ícones da interface |
| GitHub Actions | Deploy automático no GitHub Pages |
| Git & GitHub | Versionamento e hospedagem |

---

## 📁 Estrutura do projeto
```
src/
├── App.jsx               → Componente raiz
├── App.module.css        → Layout grid principal
├── index.css             → Variáveis CSS globais e tema
├── main.jsx              → Entry point
├── data/
│   └── index.js          → Dados estáticos (projetos, skills, formação)
├── hooks/
│   └── useTheme.js       → Hook customizado de tema
└── components/
    ├── Header/           → Navegação + toggle de tema
    ├── Ficha/            → Foto, redes sociais, modal de e-mail
    ├── SobreMim/         → Apresentação pessoal
    ├── Skills/           → Tecnologias
    ├── Formacao/         → Formação acadêmica
    ├── Projetos/         → Lista paginada de projetos + modal
    └── Footer/           → Rodapé
```

---

## ▶️ Como rodar localmente
```bash
# Clone o repositório
git clone https://github.com/giliarder1994/portfolio-react.git

# Entre na pasta
cd portfolio-react

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

---

## 👨‍💻 Sobre mim

Sou estudante de Engenharia de Software em transição de carreira para a área de
Desenvolvimento Web, com foco em Back-End. Tenho trabalhado com **Node.js, Express
e MySQL**, desenvolvendo APIs REST com autenticação JWT, integração com banco de dados
e boas práticas de desenvolvimento.

Busco uma oportunidade de estágio onde eu possa aplicar meus conhecimentos, aprender
com profissionais experientes e crescer no setor de tecnologia.

---

## 📬 Contato

- 💼 LinkedIn: [linkedin.com/in/giliarde-rodrigues](https://www.linkedin.com/in/giliarde-rodrigues/)
- 🐙 GitHub: [github.com/giliarder1994](https://github.com/giliarder1994)
- 📧 Email: giliarder1994@gmail.com

---

⭐ Se este projeto te ajudou ou chamou sua atenção, considere deixar uma estrela no repositório!