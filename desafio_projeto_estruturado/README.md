# 🛒 E-Commerce Platform — React + TypeScript

Plataforma de e-commerce moderna, escalável e orientada a boas práticas de engenharia de software.  
Desenvolvida para simular um ambiente **real de produto**, com autenticação segura, arquitetura em camadas, gerenciamento de estado global, padrões de componentização e integração com API REST.

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge)

</div>

---

## 🚀 Sobre o Projeto

Este projeto foi construído com foco em **arquitetura profissional de frontend**, simulando um sistema de e-commerce real com dois contextos de uso:

| Perfil  | Responsabilidades |
|--------|-------------------|
| 👤 **Cliente** | Navegação de catálogo, filtros, carrinho persistente, checkout |
| 🔧 **Admin** | CRUD completo de produtos com formulários validados, integração com API e atualização em tempo real da interface |

O objetivo principal foi aplicar conceitos usados em **times de produto reais**, indo além de um CRUD simples.

---

## 🧠 Principais Conceitos Aplicados

### 🧩 Arquitetura e Organização

- Separação em **camadas**: Components, Services, Models, Utils  
- Padrão **Service Layer** para isolar regras de negócio  
- Abstração de persistência com **localStorage repositories**  
- Estrutura escalável pensando em crescimento de features  

### ⚛️ React Profissional

- **Estado global com Context API** — Contextos separados por responsabilidade (Auth e Cart), evitando props drilling e reduzindo acoplamento entre componentes.

- **Custom Hooks** — Abstração de lógica reutilizável (autenticação, carrinho, formulários), promovendo código declarativo e reaproveitamento entre páginas.

- **Componentização orientada a responsabilidade** — Separação entre componentes de UI, domínio (Catálogo, Produto, Carrinho) e infraestrutura (PrivateRoute, Headers), mantendo coesão e baixo acoplamento.

- **Autorização baseada em roles** — Proteção de rotas usando payload do JWT, isolando áreas administrativas sem dependência direta da camada de interface.

- **Otimização de renderização** — Lazy state initialization e controle de efeitos com useEffect, evitando re-renderizações desnecessárias.

- **Atualizações imutáveis de estado** — Uso consistente de operações funcionais (map, filter, some, spread) garantindo previsibilidade do React.

- **Estados de interface bem definidos** — Tratamento explícito de loading, erro e sucesso, melhorando UX e previsibilidade da UI.

### 🔐 Autenticação & Segurança

- JWT com interceptor Axios  
- Contexto de autenticação distribuído  
- Rotas privadas dinâmicas  
- Controle de acesso por perfil (Admin/User)  

### 📦 Consumo de API

- Axios centralizado  
- Interceptors  
- Tratamento de loading e erro  
- Organização de serviços por domínio  

---

## 🛠️ Stack Técnica

| Camada | Tecnologias |
|--------|-------------|
| UI | React 19 + TypeScript |
| Build | Vite |
| Roteamento | React Router v6 |
| Estado Global | Context API |
| HTTP | Axios |
| Auth | JWT |
| Forms | React Select + validações custom |
| Qualidade | ESLint + Prettier |

---

## 🔁 CI/CD — Práticas de Integração Contínua Aplicadas

Durante o desenvolvimento, o projeto foi estruturado seguindo conceitos de Integração Contínua e Entrega Contínua, simulando o fluxo de trabalho adotado em times de produto.

### ✅ Integração Contínua (CI)

O repositório e os scripts foram organizados para permitir automação de validações, incluindo:
  - Instalação padronizada de dependências
  - Execução de lint para garantir qualidade de código
  - Compilação TypeScript sem erros
  - Geração de build de produção como etapa de verificação

Objetivo dessas práticas:
✔ Garantir que o projeto esteja sempre “buildável”
✔ Evitar regressões e código quebrado
✔ Manter consistência de qualidade
✔ Preparar o projeto para pipelines automatizados 

### 🚀 Entrega Contínua (CD)

A estrutura do projeto foi planejada para facilitar deploy automatizado, sendo compatível com plataformas como Netlify, Vercel ou servidores próprios.

Inclui:
  - Scripts de build otimizados para produção
  - Separação clara entre ambiente de desenvolvimento e build
  - Organização compatível com ambientes de staging/produção

**📘 Aprendizados Aplicados**
  - Mentalidade de automação como parte do desenvolvimento
  - Cultura de qualidade antes de integração na branch principal
  - Entendimento do papel de pipelines na engenharia de software
  - Preparação de projeto frontend para fluxos reais de entrega contínua

---

## 📂 Estrutura do Projeto

```bash
src/
├── assets/
├── components/
├── localstorage/
├── models/
├── routes/
├── services/
├── utils/
└── App.tsx
```

---

## ▶️ Como Executar o Projeto
### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/iolymmoliveira/desafios_reactJS.git
cd desafios_reactJS/desafio_projeto_estruturado
```

### 2️⃣ Instalar dependências
Com Yarn (recomendado):
```
yarn
```
Ou com npm:
```
npm install
```

### 3️⃣ Ambiente de desenvolvimento
```
yarn dev
# ou
npm run dev
```
Aplicação disponível em: http://localhost:5173

### 

### 4️⃣ Build de produção
```
yarn build
yarn preview
# ou
npm run build
npm run preview

```

### 5️⃣ Qualidade de código
```
yarn lint
# ou
npm run lint
```

---

## 🎯 Diferenciais Técnicos do Projeto

Este projeto demonstra:
  - Arquitetura escalável
  - Padrões reais de frontend
  - Organização profissional de código
  - Integração com backend REST
  - Autenticação segura
  - Estado global bem estruturado
  - Preparação para CI/CD

Não é apenas um CRUD — é uma simulação de produto real em ambiente de time.

---

## 👩‍💻 Desenvolvido por

Ioly Oliveira
Frontend Developer | React | TypeScript | Java

---

<div align="center">

⭐ Se este projeto foi útil ou interessante, considere dar uma estrela!

</div>

---