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
  Solicitud,
  Usuario
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudUsuarioController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.solicitudRepository.usuarios(id).find(filter);
  }

  @post('/solicituds/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype.idsolictud,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInSolicitud',
            exclude: ['idusuario'],
            optional: ['solicitudId']
          }),
        },
      },
    }) usuario: Omit<Usuario, 'id_usuario'>,
  ): Promise<Usuario> {
    return this.solicitudRepository.usuarios(id).create(usuario);
  }

  @patch('/solicituds/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Solicitud.Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Partial<Usuario>,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.solicitudRepository.usuarios(id).patch(usuario, where);
  }

  @del('/solicituds/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Solicitud.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.solicitudRepository.usuarios(id).delete(where);
  }
}
