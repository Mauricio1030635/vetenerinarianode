import {Entity, model, property} from '@loopback/repository';

@model()
export class Plan extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idplan?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionPlan: string;

  @property({
    type: 'number',
    required: true,
  })
  precioPlan: number;


  constructor(data?: Partial<Plan>) {
    super(data);
  }
}

export interface PlanRelations {
  // describe navigational properties here
}

export type PlanWithRelations = Plan & PlanRelations;
