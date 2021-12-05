import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  DetallePedido,
  Producto
} from '../models';
import {DetallePedidoRepository} from '../repositories';

export class DetallePedidoProductoController {
  constructor(
    @repository(DetallePedidoRepository) protected detallePedidoRepository: DetallePedidoRepository,
  ) { }

  @get('/detalle-pedidos/{id}/productos', {
    responses: {
      '200': {
        description: 'Array of DetallePedido has many Producto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Producto)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Producto>,
  ): Promise<Producto[]> {
    return this.detallePedidoRepository.productos(id).find(filter);
  }

  @post('/detalle-pedidos/{id}/productos', {
    responses: {
      '200': {
        description: 'DetallePedido model instance',
        content: {'application/json': {schema: getModelSchemaRef(Producto)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DetallePedido.prototype.iddetallepedido,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {
            title: 'NewProductoInDetallePedido',
            exclude: ['idproducto'],
            optional: ['detallePedidoId']
          }),
        },
      },
    }) producto: Omit<Producto, 'id_producto'>,
  ): Promise<Producto> {
    return this.detallePedidoRepository.productos(id).create(producto);
  }

  @patch('/detalle-pedidos/{id}/productos', {
    responses: {
      '200': {
        description: 'DetallePedido.Producto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Producto, {partial: true}),
        },
      },
    })
    producto: Partial<Producto>,
    @param.query.object('where', getWhereSchemaFor(Producto)) where?: Where<Producto>,
  ): Promise<Count> {
    return this.detallePedidoRepository.productos(id).patch(producto, where);
  }

  @del('/detalle-pedidos/{id}/productos', {
    responses: {
      '200': {
        description: 'DetallePedido.Producto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Producto)) where?: Where<Producto>,
  ): Promise<Count> {
    return this.detallePedidoRepository.productos(id).delete(where);
  }
}
