export interface INotificacao {
  aplicativo: string;
  titulo: string;
  descricao: string;
  tempoPublicacao: string;
  imagem: string;
  lido?: boolean;
  id?: number;
}
