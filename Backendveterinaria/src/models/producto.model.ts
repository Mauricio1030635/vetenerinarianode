import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_producto?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreProducto: string;

  @property({
    type: 'string',
    required: true,
  })
  detalleProducto: string;

  @property({
    type: 'number',
    required: true,
  })
  precioUnitario: number;

  @property({
    type: 'string',
  })
  proveedor?: string;

  @property({
    type: 'string',
    required: true,
  })
  imagenProducto: string;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
