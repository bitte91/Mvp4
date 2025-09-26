# Configuração do Ambiente

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

1. **Node.js** (versão 18 ou superior)
2. **npm** (geralmente vem com o Node.js) ou **yarn**
3. **Git** (para controle de versão e deploy)

## Instalação

1. **Instale o Node.js**:
   - Acesse [https://nodejs.org](https://nodejs.org)
   - Baixe e instale a versão LTS (Recomendada para a maioria dos usuários)
   - Isso também instalará o npm automaticamente

2. **Instale o Git**:
   - Acesse [https://git-scm.com](https://git-scm.com)
   - Baixe e instale o Git para Windows
   - Durante a instalação, mantenha as opções padrão

3. **Verifique a instalação**:
   ```bash
   node --version
   npm --version
   git --version
   ```

4. **Instale as dependências do projeto**:
   ```bash
   npm install
   ```

## Executando o Projeto

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Modo de Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm run start
```

## Estrutura do Projeto

```
.
├── app/                 # Páginas e roteamento (Next.js App Router)
├── components/          # Componentes reutilizáveis
├── lib/                 # Funções utilitárias
├── public/              # Arquivos estáticos
├── types/               # Definições de tipos TypeScript
├── next.config.js       # Configuração do Next.js
├── tailwind.config.ts   # Configuração do Tailwind CSS
└── tsconfig.json        # Configuração do TypeScript
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila a aplicação para produção
- `npm run start`: Inicia o servidor de produção após o build
- `npm run lint`: Executa verificação de linting

## Solução de Problemas

### Erros Comuns

1. **"npm : O termo 'npm' não é reconhecido..."**
   - Certifique-se de que o Node.js está instalado corretamente
   - Reinicie o terminal após a instalação do Node.js
   - Verifique se o npm está no PATH do sistema

2. **Erros de tipagem TypeScript**
   - Execute `npm install` para instalar todas as dependências
   - Verifique se as extensões do editor estão configuradas para TypeScript

3. **Problemas com o Tailwind CSS**
   - Reinicie o servidor de desenvolvimento
   - Verifique se o arquivo `tailwind.config.ts` está configurado corretamente

### Dependências de Desenvolvimento

Se você encontrar problemas com tipos TypeScript, tente instalar as dependências de desenvolvimento:

```bash
npm install --save-dev @types/node @types/react @types/react-dom
```