# 🚀 Formação ReactJS Professional — Projetos e Evolução Técnica

Este repositório reúne os projetos desenvolvidos durante a formação **ReactJS Professional** da https://devsuperior.com.br/, com foco em **engenharia de frontend**, boas práticas de arquitetura e simulação de cenários reais de produto.

Aqui não estão apenas exercícios, mas uma **linha de evolução técnica**, culminando em um projeto final estruturado como aplicação de mercado.

O objetivo é demonstrar:

✔ Evolução técnica
✔ Capacidade de arquitetar aplicações React
✔ Boas práticas de engenharia de software
✔ Mentalidade de código voltado para times e produto

---

## 🧠 Jornada de Aprendizado

| Projeto                           | Foco                                                | Principais Conceitos                                                      |
| --------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------- |
| **desafio_componentes_react**     | Base de componentização                             | Props, composição, reutilização de UI                                     |
| **desafio_filter**                | Manipulação de dados                                | Filtros, estado local, renderização dinâmica                              |
| **desafio_github_api**            | Integração com APIs                                 | Fetch, estados de loading/erro, efeitos colaterais                        |
| **desafio_rotas_react**           | Estrutura SPA                                       | React Router, navegação, proteção de rotas                                |
| ⭐ **desafio_projeto_estruturado** | **Aplicação completa com arquitetura profissional** | **Estado global, autenticação, carrinho, roles, organização por camadas** |

Este projeto consolida todos os aprendizados anteriores em uma aplicação com organização e responsabilidades similares às usadas em times de produto.

---

## ⭐ Projeto Principal — desafio_projeto_estruturado

Este projeto consolida todos os aprendizados anteriores em uma aplicação com organização e responsabilidades similares às usadas em times de produto.

**🎯 O que a aplicação simula**

  - Catálogo de produtos
  - Carrinho de compras
  - Autenticação de usuários
  - Área administrativa
  - Controle de acesso por perfil

---

## ⚛️ Engenharia React Aplicada

**🧩 Arquitetura por Responsabilidade**

Estrutura dividida entre:
  - UI Components → foco visual
  - Domain Components → regras de negócio (Produto, Catálogo, Carrinho)
  - Infra Components → autenticação e proteção de rotas
Promove coesão e baixo acoplamento.

**🌍 Estado Global com Context API**

Separação de contextos por domínio:

  - `AuthContext`
  - `CartContext`

✔ Evita props drilling
✔ Centraliza regras de negócio
✔ Mantém previsibilidade do estado

**🪝 Custom Hooks**

Encapsulamento de lógica reutilizável:
  - Autenticação
  - Manipulação de carrinho
  - Persistência de dados
Código mais limpo, declarativo e reutilizável.

**🔐 Proteção de Rotas (Role-Based Routing)**

Controle de acesso baseado no payload do JWT:
  - Usuário comum → catálogo e carrinho
  - Admin → área de gestão
Sem acoplamento das regras de permissão à UI.

**⚡ Performance e Boas Práticas**

  - Lazy State Initialization
  - Imutabilidade no update de estado
  - useEffect com dependências controladas
  - Renderização condicional (loading/erro/sucesso)

---

## 📸 Preview da Aplicação

| 📱 Mobile | 💻 Desktop |
|----------|------------|
| <img src="/desafio_projeto_estruturado/src/assets/images/01_login_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/01_login_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/02_catalog_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/02_catalog_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/03_product_details_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/03_product_details_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/04_cart_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/04_cart_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/05_confirmation_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/05_confirmation_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/06_home_admin_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/06_home_admin_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/07_admin_product_create_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/07_admin_product_create_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/08_admin_product_create_edit_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/08_admin_product_create_edit_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/09_admin_product_create_error_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/09_admin_product_create_error_desktop.webp" height="350"/> |
| <img src="/desafio_projeto_estruturado/src/assets/images/10_admin_product_create_delete_mobile.webp" height="350"/> | <img src="/desafio_projeto_estruturado/src/assets/images/10_admin_product_create_delete_desktop.webp" height="350"/> |

---

## 🔁 CI/CD e Mentalidade de Produto

O projeto foi estruturado com visão de ambiente profissional:
- Build validada antes de deploy
- Lint como parte do fluxo de qualidade
- Estrutura pronta para integração com Vercel/Netlify
- Separação clara entre UI e regras de negócio

---

## 🛠️ Tecnologias Utilizadas

<p> 
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" /> 
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/State-Context%20API-22c55e" /> 
  <img src="https://img.shields.io/badge/Routing-React%20Router-CA4245?logo=reactrouter&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens" /> 
  <img src="https://img.shields.io/badge/API-REST-0ea5e9" /> 
  <img src="https://img.shields.io/badge/Access%20Control-Role%20Based-ef4444" /> 
  <img src="https://img.shields.io/badge/Code%20Quality-ESLint-4B32C3?logo=eslint&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Architecture-Component%20Based-orange" /> 
</p>

---

## 💼 Competências Demonstradas

Este repositório evidencia capacidade em:
  - Arquitetar aplicações React escaláveis
  - Trabalhar com estado global e autenticação
  - Integrar frontend com APIs
  - Organizar código para times
  - Pensar performance e experiência do usuário
  - Seguir padrões profissionais de desenvolvimento

---

## 👩‍💻 Autora

**Ioly Oliveira**
Desenvolvedora Frontend (React) com conhecimento em backend Java, focada em arquitetura de aplicações web e qualidade de código.

---