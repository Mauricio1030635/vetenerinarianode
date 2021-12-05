import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Mascota,
  Solicitud
} from '../models';
import {MascotaRepository} from '../repositories';

export class MascotaSolicitudController {
  constructor(
    @repository(MascotaRepository)
    public mascotaRepository: MascotaRepository,
  ) { }

  @get('/mascotas/{id}/solicitud', {
    responses: {
      '200': {
        description: 'Solicitud belonging to Mascota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async getSolicitud(
    @param.path.string('idmascota') id: typeof Mascota.prototype.idmascota,
  ): Promise<Solicitud> {
    return this.mascotaRepository.solicitud(id);
  }
}
