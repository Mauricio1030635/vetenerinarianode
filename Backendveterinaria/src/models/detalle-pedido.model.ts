import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Producto} from './producto.model';

@model()
export class DetallePedido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  iddetallepedido?: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  valorTotal: number;

  @belongsTo(() => Pedido)
  pedidoId: string;

  @hasMany(() => Producto)
  productos: Producto[];

  constructor(data?: Partial<DetallePedido>) {
    super(data);
  }
}

export interface DetallePedidoRelations {
  // describe navigational properties here
}

export type DetallePedidoWithRelations = DetallePedido & DetallePedidoRelations;
