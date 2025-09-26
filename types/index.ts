// types/index.ts - Interfaces TypeScript do projeto

export interface Aviso {
  id: string;
  titulo: string;
  descricao: string;
  autor: string;
  categoria: 'evento' | 'informativo' | 'urgente' | 'obra';
  data: string;
  visualizacoes: number;
}

export interface Ajuda {
  id: string;
  titulo: string;
  descricao: string;
  solicitante: string;
  telefone: string;
  categoria: 'reparo' | 'mudanca' | 'idosos' | 'cuidados' | 'diversos';
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente';
  status: 'aberto' | 'em_andamento' | 'concluido' | 'cancelado';
}

export interface Servico {
  id: string;
  nome: string;
  tipo_servico: string;
  descricao: string;
  telefone: string;
  whatsapp: string;
  avaliacao: number;
  verificado: boolean;
}

export interface Alerta {
  id: string;
  tipo: 'seguranca' | 'transito' | 'utilidade_publica' | 'meio_ambiente';
  titulo: string;
  descricao: string;
  localizacao: {
    descricao: string;
    lat: number;
    lng: number;
  };
  nivel: 'info' | 'atencao' | 'alerta' | 'urgente';
  status: 'ativo' | 'resolvido' | 'falso_alarme';
  data: string;
}