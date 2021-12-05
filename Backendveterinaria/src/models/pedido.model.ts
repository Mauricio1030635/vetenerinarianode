import {Entity, model, property} from '@loopback/repository';

@model()
export class Pedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idpedido?: string;

  @property({
    type: 'date',
  })
  fechaPedido?: string;

  @property({
    type: 'string',
    required: true,
  })
  formaPago: string;

  @property({
    type: 'string',
  })
  observaciones?: string;


  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
