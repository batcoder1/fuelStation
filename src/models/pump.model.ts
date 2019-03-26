import {model, property, Entity} from '@loopback/repository';

@model()
export class Pump extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;
  
  @property({
    type: 'array',
    itemType: 'string',
    required: true,
    default: 'super95',
  })
  types: string[];
  
  @property({
    type: 'number',
  })
  dispensed?: string;

  @property({
    type: 'number',
  })
  number?: string;


  constructor(data?: Partial<Pump>) {
    super(data);
  }
}
exports.Pump = Pump;
