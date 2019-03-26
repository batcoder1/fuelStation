import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pump} from '../models';
import {PumpRepository} from '../repositories';

export class PumpController {
  constructor(
    @repository(PumpRepository)
    public pumpRepository : PumpRepository,
  ) {}

  @post('/pumps', {
    responses: {
      '200': {
        description: 'Pump model instance',
        content: {'application/json': {schema: {'x-ts-type': Pump}}},
      },
    },
  })
  async create(@requestBody() pump: Pump): Promise<Pump> {
    return await this.pumpRepository.create(pump);
  }

  @get('/pumps/count', {
    responses: {
      '200': {
        description: 'Pump model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pump)) where?: Where,
  ): Promise<Count> {
    return await this.pumpRepository.count(where);
  }

  @get('/pumps', {
    responses: {
      '200': {
        description: 'Array of Pump model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Pump}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pump)) filter?: Filter,
  ): Promise<Pump[]> {
    return await this.pumpRepository.find(filter);
  }

  @patch('/pumps', {
    responses: {
      '200': {
        description: 'Pump PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() pump: Pump,
    @param.query.object('where', getWhereSchemaFor(Pump)) where?: Where,
  ): Promise<Count> {
    return await this.pumpRepository.updateAll(pump, where);
  }

  @get('/pumps/{id}', {
    responses: {
      '200': {
        description: 'Pump model instance',
        content: {'application/json': {schema: {'x-ts-type': Pump}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Pump> {
    return await this.pumpRepository.findById(id);
  }

  @patch('/pumps/{id}', {
    responses: {
      '204': {
        description: 'Pump PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() pump: Pump,
  ): Promise<void> {
    await this.pumpRepository.updateById(id, pump);
  }

  @put('/pumps/{id}', {
    responses: {
      '204': {
        description: 'Pump PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pump: Pump,
  ): Promise<void> {
    await this.pumpRepository.replaceById(id, pump);
  }

  @del('/pumps/{id}', {
    responses: {
      '204': {
        description: 'Pump DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pumpRepository.deleteById(id);
  }
}
