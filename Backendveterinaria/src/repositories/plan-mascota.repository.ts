import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {PlanMascota, PlanMascotaRelations} from '../models';

export class PlanMascotaRepository extends DefaultCrudRepository<
  PlanMascota,
  typeof PlanMascota.prototype.id_planMascota,
  PlanMascotaRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(PlanMascota, dataSource);
  }
}
