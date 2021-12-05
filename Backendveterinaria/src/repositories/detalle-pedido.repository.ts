import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {DetallePedido, DetallePedidoRelations, Pedido, Producto} from '../models';
import {PedidoRepository} from './pedido.repository';
import {ProductoRepository} from './producto.repository';

export class DetallePedidoRepository extends DefaultCrudRepository<
  DetallePedido,
  typeof DetallePedido.prototype.id_detalle_pedido,
  DetallePedidoRelations
> {

  public readonly pedido: BelongsToAccessor<Pedido, typeof DetallePedido.prototype.id_detalle_pedido>;

  public readonly productos: HasManyRepositoryFactory<Producto, typeof DetallePedido.prototype.id_detalle_pedido>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>,
  ) {
    super(DetallePedido, dataSource);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
    this.pedido = this.createBelongsToAccessorFor('pedido', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedido', this.pedido.inclusionResolver);
  }
}
