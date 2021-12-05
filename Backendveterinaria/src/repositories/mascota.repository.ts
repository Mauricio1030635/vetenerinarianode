import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Mascota, MascotaRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class MascotaRepository extends DefaultCrudRepository<
  Mascota,
  typeof Mascota.prototype.id_mascota,
  MascotaRelations
> {

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof Mascota.prototype.id_mascota>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Mascota, dataSource);
    this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
