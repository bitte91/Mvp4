# Deploy na Vercel

## Pré-requisitos

1. Conta na [Vercel](https://vercel.com/)
2. Projeto configurado e testado localmente
3. Git instalado e configurado

## Deploy Automático com GitHub

### 1. Faça o upload do projeto para o GitHub

1. Crie um novo repositório no GitHub
2. No terminal, na pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
git push -u origin main
```

### 2. Importe o projeto na Vercel

1. Acesse [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em "New Project"
3. Selecione o repositório que você acabou de criar
4. Configure as opções de importação:
   - Framework Preset: Next.js
   - Root Directory: Deixe em branco (raiz do projeto)
   - Build and Output Settings: Use as configurações padrão
5. Clique em "Deploy"

### 3. Configurações de Build

A Vercel automaticamente detectará que é um projeto Next.js e configurará:

- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

## Deploy Manual via CLI

### 1. Instale a Vercel CLI

```bash
npm install -g vercel
```

### 2. Faça login na Vercel

```bash
vercel login
```

### 3. Faça o deploy

Na pasta do projeto, execute:

```bash
vercel
```

Siga as instruções:
- Set up and deploy? Y
- Which scope do you want to deploy to? (selecione sua conta)
- Found project "nome-do-projeto". Link to it? N
- Set up "./nome-do-projeto"? Y
- Which directory should be deployed? ./
- Want to override the settings? N

## Configurações de Ambiente

### Variáveis de Ambiente

Se o projeto usar variáveis de ambiente, adicione-as na Vercel:

1. No dashboard da Vercel, vá para as configurações do projeto
2. Clique em "Environment Variables"
3. Adicione as variáveis necessárias

Exemplo de variáveis comuns:
```
NEXT_PUBLIC_URL=https://seu-site.vercel.app
```

## Configurações de Domínio Personalizado

1. No dashboard da Vercel, vá para as configurações do projeto
2. Clique em "Domains"
3. Adicione seu domínio personalizado
4. Siga as instruções para configurar os registros DNS

## CI/CD e Deploy Contínuo

O deploy na Vercel é automático após cada push para o repositório conectado:

- Push para `main`: Deploy em produção
- Push para outras branches: Deploy de pré-visualização

## Monitoramento e Analytics

A Vercel fornece:

- Relatórios de performance
- Analytics de uso
- Logs de erro
- Métricas de resposta

## Solução de Problemas

### Erros Comuns de Deploy

1. **Build Failed: Can't resolve module**
   - Verifique se todas as dependências estão no `package.json`
   - Execute `npm install` localmente antes de fazer o push

2. **404 em rotas dinâmicas**
   - Verifique a estrutura de pastas em `app/`
   - Confirme que os arquivos `page.tsx` estão nomeados corretamente

3. **Problemas com variáveis de ambiente**
   - Prefixe variáveis públicas com `NEXT_PUBLIC_`
   - Adicione variáveis sensíveis no dashboard da Vercel

### Logs de Deploy

Para verificar logs detalhados:

1. Acesse o dashboard da Vercel
2. Vá para o projeto
3. Clique no deploy com erro
4. Verifique a aba "Logs"

## Otimizações

### Performance

- O Next.js já inclui otimizações automáticas
- Imagens são otimizadas com `next/image`
- Fontes são otimizadas com `next/font`

### Cache

- A Vercel configura headers de cache automaticamente
- Static assets são cacheados globalmente
- Server-side rendering é cacheado por edge locations

## Links Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação da Vercel](https://vercel.com/docs)
- [Configuração do Projeto Next.js](https://nextjs.org/docs/app/building-your-application/deploying)