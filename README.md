# Casa-Pau-dos-Ferros-frontend

## Sobre
Este projeto é referente a disciplina de Engenharia de Software da UTFPR e tem como objetivo implementar funcionalidades básicas de um marketplace e 2 testes unitários sobre estas funcionalidades básicas

## Design pattern 

Esse projeto utiliza o [composite pattern](https://refactoring.guru/design-patterns/composite)

## Setup inicial
### Pré-requisitos
[Node.js](https://nodejs.org/en/download)
### Requisitos

1. Entrar na pasta frontend
```
cd frontend
```

2. Instalar requerimentos
```
npm install
```
3. Criar um file .env dentro do folder frontend

4. Setar as variavies

```
NEXT_PUBLIC_PORT=8000
NEXT_PUBLIC_HOST=localhost
NEXT_PUBLIC_LOCAL=http://$NEXT_PUBLIC_HOST:$NEXT_PUBLIC_PORT
```
Certifique que o port seja igual ao do backend

5. Iniciar o server
```
npm run dev
```

## Tecnologias utilizadas
- [Node.js](https://nodejs.org/en)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
