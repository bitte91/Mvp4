# Conecta Bairro - MVP

Uma aplicação web para promover a conectividade e engajamento comunitário em bairros urbanos.

## Visão Geral

O Conecta Bairro permite que os moradores acessem informações locais, reportem necessidades, visualizem alertas e serviços disponíveis, tudo em uma interface simples e acessível.

### Problemas Principais Resolvidos

- Falta de centralização de informações locais (avisos, serviços, emergências)
- Dificuldade na comunicação entre moradores e autoridades locais
- Baixa visibilidade de solicitações de ajuda ou incidentes

## Funcionalidades

- **Mapa Interativo**: Visualização geográfica de ocorrências, serviços e pedidos de ajuda usando Leaflet
- **Solicitações de Ajuda**: Cadastro e visualização de pedidos de auxílio por moradores
- **Alertas Comunitários**: Relato e acompanhamento de situações urgentes (ex: enchentes, crimes)
- **Avisos Oficiais**: Publicação de comunicados oficiais pela administração local
- **Serviços Locais**: Cadastro e busca de serviços disponíveis no bairro

## Tecnologias Utilizadas

- **Frontend**: React 18 + Next.js 14.2.0 (App Router)
- **Estilização**: Tailwind CSS (v3.4+), class-variance-authority, clsx, tailwind-merge
- **Mapas**: Leaflet + react-leaflet
- **Ícones**: lucide-react
- **Tipagem**: TypeScript (^5)
- **PWA**: next-pwa (^5.6.0)

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse http://localhost:3000 no seu navegador

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila a aplicação para produção
- `npm run start`: Inicia o servidor de produção após o build
- `npm run lint`: Executa verificação de linting

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

## Paleta de Cores

- **Primária**: #3B82F6 (azul para confiança e calma)
- **Secundária**: #F97316 (laranja para ação e energia)
- **Sucesso**: #22C55E (verde para status positivos)
- **Perigo**: #EF4444 (vermelho para alertas críticos)
- **Neutros**: 
  - Fundo: #F8FAFC (slate-50)
  - Texto secundário: #64748B (slate-500)
  - Texto principal: #0F172A (slate-900)

## Deploy

O projeto está pronto para ser implantado na Vercel, plataforma nativa do Next.js.

## Licença

MIT