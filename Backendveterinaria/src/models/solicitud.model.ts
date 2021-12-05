import {Entity, hasMany, model, property} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idsolictud?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionSolitud: string;

  @property({
    type: 'date',
    required: true,
  })
  fechasolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSolicitud: string;

  @hasMany(() => Usuario)
  usuarios: Usuario[];

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
