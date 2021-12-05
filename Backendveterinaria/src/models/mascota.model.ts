import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Mascota extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idmascota?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreMascota: string;

  @property({
    type: 'number',
    required: true,
  })
  edadMascota: number;

  @property({
    type: 'string',
  })
  razaMascota?: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Solicitud)
  solicitudId: string;

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
