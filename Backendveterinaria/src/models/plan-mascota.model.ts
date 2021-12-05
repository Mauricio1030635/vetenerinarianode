import {Entity, model, property} from '@loopback/repository';

@model()
export class PlanMascota extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_planMascota?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaPagoMascotaPlan: string;

  @property({
    type: 'string',
    required: true,
  })
  observaciones: string;


  constructor(data?: Partial<PlanMascota>) {
    super(data);
  }
}

export interface PlanMascotaRelations {
  // describe navigational properties here
}

export type PlanMascotaWithRelations = PlanMascota & PlanMascotaRelations;
