import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_usuario?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  telefonoUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  correoUsuario: string;

  @property({
    type: 'string',
  })
  direccionUsuario?: string;

  @property({
    type: 'number',
  })
  estado?: number;

  @property({
    type: 'string',
  })
  password?: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
